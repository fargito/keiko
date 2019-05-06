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
    public function __construct(NormalizerInterface $normalizer, EntityManagerInterface $entityManager)
    {
        $this->normalizer = $normalizer;
        $this->entityManager = $entityManager;
        $this->serializer = new Serializer([new ObjectNormalizer()], [new JsonEncoder()]);

    }

    /**
     * @Route("/pokemon", methods={"GET", "HEAD"})
     * @param NormalizerInterface $normalizer
     * @param EntityManagerInterface $entityManager
     *
     * @return JsonResponse
     */
    public function getAllPokemons()
    {
        # get all the pokemons from the database
        $pokemons = $this->getDoctrine()->getRepository(Pokemon::class)->findAll();

        $jsonResponse = $this->serializer->serialize($pokemons, 'json');

        return new Response($jsonResponse);
    }
    /**
     * @Route("/pokemon", methods={"POST",})
     */
    public function createPokemon()
    {
        #$entityManager = $this->getDoctrine()->getManager();


        $pokemon = new Pokemon();
        $pokemon->setName("blob3");
        $pokemon->setHeight(12);
        $pokemon->setWeight(15);

        $this->entityManager->persist($pokemon);
        $this->entityManager->flush();

        return new Response("Hello from create");
    }
    /**
     * @Route("/pokemon/{pokemonId}", methods={"GET", "HEAD"})
     * @param NormalizerInterface $normalizer
     * @param EntityManagerInterface $entityManager
     *
     * @return JsonResponse
     */
    public function getSinglePokemon($pokemonId)
    {
        $pokemon = $this->getDoctrine()->getRepository(Pokemon::class)->find($pokemonId);

        # return empty response if no pokemon is found
        if (!$pokemon) return new JsonResponse();

        $jsonResponse = $this->serializer->serialize($pokemon, 'json');

        return new Response($jsonResponse);
    }
}
