export default [
  /* {
    link: "https://epichaco.tk/api/ipcgrResis", ==> link de la api a cual se conectara
    title: ["Text", "Variable", "Text"],        ==> titulo compuesto de (Texto al inicio) + variable + (texto al final)
    subtitle: ["Text", "Variable", "Text"],     ==> subtitle compuesto de (Texto al inicio) + variable + (texto al final)
    valor: ["Text", "Variable", "Text"],        ==> valor compuesto de (Texto al inicio) + variable + (texto al final)
    variable: ["variable", "que buscar"],       ==> valor compuesto de (Texto al inicio) + variable + (texto al final)
    grafico: ["VariableEjeX", "VariableEjeY"],  ==> datos a graficar en eje x e y
    graficoTexto: ["Text", "Variable", "Text"], ==> texto interno al grafico compuesto de (Texto al inicio) + variable + (texto al final)
  }, */
 /*  {
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/d%C3%B3lar_minorista.json",
    title: ["Dolar Oficial", "tipo", ""],
    subtitle: ["variacion del"],
    valor: ["$", "cotizacion", ""],
    variable: ["tipo", "Venta"],
    grafico: ["Fecha", "cotizacion"],
    graficoTexto: ["", "cotizacion", ""],
  }, */
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/d%C3%B3lar_minorista.json", //dólar_minorista
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/d%C3%B3lar_blue.json", //dolar blu
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/euro_minorista_-_venta.json",
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/euro_minorista_-_compra.json",
  //=== IPC Chaco ===
  {
    link: "https://epichaco.tk/api/ipcgrResis",
    title: ["IPC-CHACO", "", ""],
    subtitle: ["variacion mensual al"],
    valor: ["", "var_mens", "%"],
    variable: ["sector", "Nivel General"],
    grafico: ["fecha", "var_mens"],
    graficoTexto: ["", "VAR_MENS", ""],
  },
  //=================
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/inflaci%C3%B3n_%28ipc%29.json", //IPC
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/inflaci%C3%B3n_mayorista.json", //Inflación mayorista
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/inflaci%C3%B3n_n%C3%BAcleo_%28ipc_n%C3%BAcleo%29.json",
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producto_bruto_interno_%28pbi%29.json", //PBI
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/estimador_mensual_de_la_actividad_econ%C3%B3mica_%28emae%29.json", //EMAE
  "IMACH", //IMACH
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/%C3%ADndice_de_producci%C3%B3n_industrial_%28ipi%29.json", //IPI
  "Energia Industrial", //Energia Industrial//Consumo Eléctrico Industrial
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/capacidad_instalada_de_la_industria.json",
  //Producción Forestal Muebles
  {
    link: "http://epichaco.tk/api/forestalPrimario",
    title: ["", "producto", ""],
    subtitle: ["variacion mensual al"],
    valor: ["", "var_mens", "%"],
    variable: ["producto", "Carbón en bolsa"],
    grafico: ["fecha", "var_mens"],
    graficoTexto: ["", "var_mens", ""],
  },
  "Aberturas", //Producción Forestal Aberturas
  //Producción Tanino
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/indicador_sint%C3%A9tico_de_la_construcci%C3%B3n_%28isac%29.json", //ISAC
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/despacho_de_cemento.json", //Despacho de cemento
  /* { //Despacho de cemento test nuevo codigo
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/despacho_de_cemento.json",
    title: ["", "Tipo", ""],
    subtitle: ["variacion mensual al"],
    valor: ["", "Cantidad", ""],
    variable: ["Tipo", "Despacho de cemento en toneladas"],
    grafico: ["Fecha", "Cantidad"],
    graficoTexto: ["", "Cantidad", ""],
  }, */
  "Cemento", //Cemento Total
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/valor_uva.json", //valor uva
  "Empleo Formal", //Empleo IERIC
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/tasa_de_desocupaci%C3%B3n.json", //Tasa de desocupación ========> controlar
  //Tasas de Desocupación (nación y pcia)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/trabajadores_registrados.json", //"Dat": "En miles de trabajadores", "Cantidad": "12.034,30", tratar captura de dato diferente
  //Empleo general
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/tasa_de_actividad_laboral.json", //"Tipo": "Actividad", "Indice": "46,00"
  //Tasas de actividad (nación y pcia)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/tasa_de_empleo.json", //Tasa de empleo
  //Tasas de Empleo (nación y Pcia)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/salario_m%C3%ADnimo%2C_vital_y_m%C3%B3vil.json", //"Tipo": "Salario mínimo, vital y móvil", "Salario": "16.875,00",
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/deuda_externa.json", //Deuda externa
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/saldo_comercial.json", //Saldo comercial
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/importaciones.json", //Importaciones
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/exportaciones.json", //Exportaciones
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/balanza_de_pagos.json", //Balanza de pagos
  "Carbon a granel", //Producción Carbón Granel
  "Carbon en bolsa", //Producción Carbón Bolsa
  "Rollos", //Producción Rollos
  "Rollizos", //Producción Rollizos
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/recaudaci%C3%B3n_de_seguridad_social.json", //"Tipo": "Impuestos vinculados al empleo" "Total recaudado ($)": "101.248,30", seguridad social
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/resultado_financiero.json", //Resultado financiero
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/resultado_fiscal_primario.json", //Resultado fiscal primario
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/recaudaci%C3%B3n_tributaria.json", //Recaudación tributaria
  //Combustible
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/ventas_en_supermercados_a_precios_constantes.json", //"Ventas (en millones)": "27.307,00"
  "Supermercados", //Supermerk2 $ constantes
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_autos.json", // "Producción": "1.519,00",
  //Transferencias autos
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/patentamiento_de_autos.json", //"Categoria": "Patentamientos de vehiculos", "Cantidad": "21.015,00",
  "Patentamientos", //Patentamiento autos
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/exportaci%C3%B3n_de_veh%C3%ADculos.json", //exportaciones de vehiculo
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/patentamiento_de_motos.json",
  //Patentamiento motos
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_bovinos.json", //Producción de bovinos (%)
  //Stock Bovinos
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/faena_de_bovinos.json", //Faena de bovinos (%)
  //Faena Bovinos (Nacion y Pcia) - variaciones
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/exportaci%C3%B3n_de_carne_vacuna.json",
  //Precios Terneros (Nación y Provincia) - Domo G
  //Precios Terneros (Nación y Provincia) - Domo A/G
  //Precios Terneros (Nación y Provincia) - ZOna Norte
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_porcinos.json", //Producción de porcinos (%)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/faena_de_porcinos.json", //
  //Faena Porcinos (Nacion y Pcia) - Variaciones
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/exportaci%C3%B3n_de_porcinos.json", //
  //Stock Porcinos
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_leche.json", //"Indice": "771,20",
  //Girasol                         => nacional
  //Maíz                            => nacional
  //Soja                            => nacional
  //Trigo                           => nacional
  //Precio Fibra Algodón - Merc Int => nacional
  //Precio Sorgo                    => nacional
  //Precio arroz cascara            => nacional
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/molienda_de_soja_-_granos_oleaginosos.json", //Molienda de soja - Granos oleaginosos (%)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/molienda_de_soja_-_aceite.json", //Molienda de soja - Aceite (%)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/molienda_de_soja_-_harina.json", //Molienda de soja - harina (%)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_gas.json", //direccion distinta y dato repetido ver
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_petr%C3%B3leo.json", //Producción de petróleo (%)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_acero_crudo.json", //Producción de acero crudo (%)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_laminados_no_planos_en_caliente.json", //Producción de laminados no planos en caliente (%)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_hierro_%28%25%29.json", //produccion de hierro
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/canasta_b%C3%A1sica_alimentaria.json", //"Canasta": "CBA", 3 datos Hogar 1, 2 y 3
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/canasta_b%C3%A1sica_total.json", //"Tipo": "Pobreza"  3 datos Hogar
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/pobreza.json", //pobreza
  //Pobreza
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/indigencia.json", //Indigencia
  //Indigencia
  "Gas Oil", //Indigencia
  "Coparticipacion", //Coparticipacion

  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/%C3%ADndice_de_confianza_del_consumidor_%28icc%29.json", //Índice de confianza del consumidor (ICC)

  //////////////// datos extras
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/escrituras_de_compraventa_en_buenos_aires_%25.json",
];
