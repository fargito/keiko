<?php
// src/Controller/PokemonController.php
namespace App\Controller;

use App\Entity\Pokemon;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
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
    public function getElements(NormalizerInterface $normalizer, EntityManagerInterface $entityManager)
    {
        $this->normalizer = $normalizer;
        $this->entityManager = $entityManager;

        # get all the pokemons from the database
        $pokemons = $this->getDoctrine()->getRepository(Pokemon::class)->findAll();



        $pokemonsResponse = array_map(function ($pokemon){
            return [
                'id' => $pokemon->getId(),
                'name' => $pokemon->getName(),
                'height' => $pokemon->getHeight(),
                'weight' => $pokemon->getWeight(),
            ];
        }, $pokemons);

        return new JsonResponse(
            $pokemonsResponse
        );
    }
    /**
     * @Route("/pokemon", methods={"POST",})
     */
    public function create(NormalizerInterface $normalizer, EntityManagerInterface $entityManager)
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
}
