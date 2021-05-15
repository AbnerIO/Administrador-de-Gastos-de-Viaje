
//Firebase modules
import * as firebase from "./modules/BDFunctions.js";
import * as f from "./modules/functions.js";
firebase.cargarData();
f.ConsultaTotal("1-P", "Juan", "pesos");
f.ConsultaTotal("1-E", "Juan", "euros");
f.ConsultaTotal("1-D", "Juan", "dólares");
f.ConsultaTotal("2-P", "Pedro", "pesos");
f.ConsultaTotal("2-E", "Pedro", "euros");
f.ConsultaTotal("2-D", "Pedro", "dólares");
f.ConsultaTotal("3-P", "Carlos", "pesos");
f.ConsultaTotal("3-E", "Carlos", "euros");
f.ConsultaTotal("3-D", "Carlos", "dólares");
f.ConsultaTotal("4-P", "Ana", "pesos");
f.ConsultaTotal("4-E", "Ana", "euros");
f.ConsultaTotal("4-D", "Ana", "dólares");
f.ConsultaTotal("5-P", "Maria", "pesos");
f.ConsultaTotal("5-E", "Maria", "euros");
f.ConsultaTotal("5-D", "Maria", "dólares");
f.ConsultaTotal("6-P", "Alejandra", "pesos");
f.ConsultaTotal("6-E", "Alejandra", "euros");
f.ConsultaTotal("6-D", "Alejandra", "dólares");
f.consultaTotalTodos("7-P", "pesos");
f.consultaTotalTodos("7-E", "euros");
f.consultaTotalTodos("7-D", "dólares");

//Consulta por fechas ("id del boton", traveler, divisa)
f.ConsultaPorFechas("1-F", "Juan", "pesos")
f.ConsultaPorFechas("2-F", "Pedro", "pesos")
f.ConsultaPorFechas("3-F", "Carlos", "pesos")
f.ConsultaPorFechas("4-F", "Ana", "pesos")
f.ConsultaPorFechas("5-F", "Maria", "pesos")
f.ConsultaPorFechas("6-F", "Alejandra", "pesos")
f.ConsultaPorCiudad("1-C", "Juan", "pesos")
f.ConsultaPorCiudad("2-C", "Pedro", "pesos")
f.ConsultaPorCiudad("3-C", "Carlos", "pesos")
f.ConsultaPorCiudad("4-C", "Ana", "pesos")
f.ConsultaPorCiudad("5-C", "Maria", "pesos")
f.ConsultaPorCiudad("6-C", "Alejandra", "pesos")
f.ConsultaRegistro("1-R", "Juan", "pesos")
f.ConsultaRegistro("2-R", "Pedro", "pesos")
f.ConsultaRegistro("3-R", "Carlos", "pesos")
f.ConsultaRegistro("4-R", "Ana", "pesos")
f.ConsultaRegistro("5-R", "Maria", "pesos")
f.ConsultaRegistro("6-R", "Alejandra", "pesos")