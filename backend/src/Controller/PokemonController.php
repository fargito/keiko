<?php
// src/Controller/PokemonController.php
namespace App\Controller;

use App\Entity\Pokemon;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

use Doctrine\ORM\EntityManagerInterface;


class PokemonController extends AbstractController
{

    protected $normalizer;
    protected $entityManager;
    protected $serializer;

    public function __construct(NormalizerInterface $normalizer, EntityManagerInterface $entityManager)
    {
        $this->normalizer = $normalizer;
        $this->entityManager = $entityManager;
        $this->serializer = new Serializer([new ObjectNormalizer()], [new JsonEncoder()]);

    }

    /**
     * @Route("/pokemon", methods={"GET", "HEAD"})
     * @return Response
     */
    public function getAllPokemons()
    {
        # get all the pokemons from the database
        $pokemons = $this->getDoctrine()->getRepository(Pokemon::class)->findAll();

        $jsonResponse = $this->serializer->serialize($pokemons, 'json');

        return new Response($jsonResponse);
    }

    /**
     * @Route("/pokemon", methods={"POST"})
     * @param Request $request
     * @return Response
     */
    public function createPokemon(Request $request)
    {

        $pokemon = $this->serializer->deserialize($request->getContent(), Pokemon::class, 'json');

        $this->entityManager->persist($pokemon);
        $this->entityManager->flush();

        $jsonResponse = $this->serializer->serialize($pokemon, 'json');

        return new Response($jsonResponse);
    }

    /**
     * @Route("/pokemon/{pokemonId}", methods={"GET", "HEAD"})
     * @return Response
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
