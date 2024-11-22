<?php
namespace App\Controller;              
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

  class MController extends AbstractController{

     #[Route('/contact')]
      public function m(): Response
      {

          // this looks exactly the same
            //return new Response('<html><body> controller .. </body></html>'); 
        return $this->render('contact.html.twig', ['number' => 1]);

      }


      #[Route('/')]
      public function n(): Response
      {
          // this looks exactly the same
            //return new Response('<html><body> controller .. </body></html>'); 


        return $this->render('home.html.twig', [
            'number' => 2,
        ]);

      }


  }