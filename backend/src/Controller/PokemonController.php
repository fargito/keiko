<?php
// src/Controller/PokemonController.php
namespace App\Controller;

use App\Entity\Pokemon;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

use Doctrine\ORM\EntityManagerInterface;


class PokemonController extends AbstractController
{
    /**
     * @Route("/pokemon", methods={"GET", "HEAD"})
     * @param NormalizerInterface $normalizer
     * @param EntityManagerInterface $entityManager
     *
     * @return JsonResponse
     */
    public function getAllPokemons(NormalizerInterface $normalizer, EntityManagerInterface $entityManager)
    {
        $this->normalizer = $normalizer;
        $this->entityManager = $entityManager;

        # get all the pokemons from the database
        $pokemons = $this->getDoctrine()->getRepository(Pokemon::class)->findAll();

        $serializer = new Serializer([new ObjectNormalizer()], [new JsonEncoder()]);
        $jsonResponse = $serializer->serialize($pokemons, 'json');

        return new Response($jsonResponse);
    }
    /**
     * @Route("/pokemon", methods={"POST",})
     */
    public function createPokemon(NormalizerInterface $normalizer, EntityManagerInterface $entityManager)
    {
        #$entityManager = $this->getDoctrine()->getManager();


        $pokemon = new Pokemon();
        $pokemon->setName("blob2");
        $pokemon->setHeight(12);
        $pokemon->setWeight(15);

        $entityManager->persist($pokemon);
        $entityManager->flush();

        return new Response("Hello from create");
    }
    /**
     * @Route("/pokemon/{pokemonId}", methods={"GET", "HEAD"})
     * @param NormalizerInterface $normalizer
     * @param EntityManagerInterface $entityManager
     *
     * @return JsonResponse
     */
    public function getSinglePokemon($pokemonId, NormalizerInterface $normalizer, EntityManagerInterface $entityManager)
    {
        $pokemon = $this->getDoctrine()->getRepository(Pokemon::class)->find($pokemonId);

        # return empty response if no pokemon is found
        if (!$pokemon) return new JsonResponse();

        $serializer = new Serializer([new ObjectNormalizer()], [new JsonEncoder()]);
        $jsonResponse = $serializer->serialize($pokemon, 'json');


        return new Response($jsonResponse);
    }
}
