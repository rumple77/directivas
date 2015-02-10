<?php

class MiClase {

    private $var2;
    private $var3;
            
    function __construct() {
        
        $this->var2 = 'mi variable';
    }
    
    public function mostrarMensaje() {
        
        echo $this->var2;
    }

}

