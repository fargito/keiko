<?php
// src/Controller/PokemonController.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PokemonController
{
    /**
     * @Route(
     *     "/pokemon",
     * )
     */
    public function hello_world()
    {
        return new Response(
            '<html><body>Hello world</body></html>'
        );
    }
}
