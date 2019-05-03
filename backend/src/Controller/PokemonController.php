<?php
// src/Controller/PokemonController.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class PokemonController
{
    /**
     * @Route("/pokemon", methods={"GET", "HEAD"})
     */
    public function helloWorld(NormalizerInterface $normalizer)
    {
        $this->normalizer = $normalizer;
        $hardCodedPokemon = [
            'id'=> 1,
            'name'=> "bulbasaur",
            'height'=> 15,
            'weight'=> 225,
            ];
        return new JsonResponse(
            $hardCodedPokemon
        );
    }
    /**
     * @Route("/pokemon", methods={"POST",})
     */
    public function helloWorld2(NormalizerInterface $normalizer)
    {
        return new Response("Hello pop");
    }
}
