function validaCampos(){            
    var classe = $("#classe").val();
    var quant = $("#quantidade").val();
    var tipo_o = parseInt($("input[name=origem]:checked").val());
    var tipo_d = parseInt($("input[name=destino]:checked").val());
    var o;
    var d;
    if(classe==""){
        $("#svazio").css("color","red");
        $("#svazio").html("Escolha o tipo da viagem");
        return false;
    }
    else if(classe=="Econômica"|| classe=="Executiva"||classe=="1ªClasse"){
        switch (tipo_o){
            case 1:
                o = 1;
                break;
            case 2:
                o = 2;
                break;
            case 3:
                o = 3;
                break;
            default:
                o = -1;
        }
        if(o == -1){
            $("#escori").css("color","red");
            $("#escori").html("Escolha uma origem");
            return false;
        }
        else if(o == 1 || o == 2 || o == 3){
            switch(tipo_d){
                case 4:
                    d = 1;
                    break;
                case 5:
                    d = 2;
                    break;
                case 6:
                    d = 3; 
                    break;
                default:
                    d = -1;
            }
            if(d == -1){
                $("#escdes").css("color","red");
                $("#escdes").html("Escolha um destino");
                return false;
            }
            else if(o == d){
                $("#escdes").css("color","red");
                $("#escdes").html("A origem e destido não pode ser iguais");
                return false;
            }
            else if(quant == ""){
                $("#quant").css("color","red");
                $("#quant").html("Escolha a quantidade de passageiros");
                return false;
            }
            return true;
        }
        return true;
    }
    else{
        return true;
    }
}


