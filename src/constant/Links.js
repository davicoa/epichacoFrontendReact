export default [
  /* { //test para dolar oficial de la nacion
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/d%C3%B3lar_minorista.json",
    title: { antestitle: 'Dolar Oficial', campotitle: "tipo", despuestitle: "" },
    subtitle: "VARIACION DEL",
    valor: { antesvalor: "$", campovalor: "cotizacion", despuesvalor: "" },
    variable: { dondebuscar: "tipo", quebuscar: "Venta" },
    grafico: { ejex: "Fecha", ejey: "cotizacion" },
    graficoTexto: "cotizacion",
    nacion: true,
  }, */
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/d%C3%B3lar_minorista.json",  //dólar_minorista
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/d%C3%B3lar_blue.json",       //dolar blu
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/euro_minorista_-_venta.json", //EURO VENTA
  //=== IPC Chaco ===
  {
    link: "https://epichaco.tk/api/ipcgrResis",
    title: { antestitle: 'IPC GR', campotitle: "", despuestitle: "" },
    subtitle: "VARIACION MENSUAL AL",
    valor: { antesvalor: "", campovalor: "var_mens", despuesvalor: "%" },
    variable: { dondebuscar: "sector", quebuscar: "Nivel General" },
    grafico: { ejex: "fecha", ejey: "var_mens" },
    graficoTexto: "VAR_MENS",
    nacion: false,
  },
  //=================
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/inflaci%C3%B3n_%28ipc%29.json", //IPC //Inflación (T)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/inflaci%C3%B3n_mayorista.json", //Inflación mayorista
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/inflaci%C3%B3n_n%C3%BAcleo_%28ipc_n%C3%BAcleo%29.json",//Inflación núcleo (IPC núcleo)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producto_bruto_interno_%28pbi%29.json", //PBI//Producto bruto interno (PBI)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/estimador_mensual_de_la_actividad_econ%C3%B3mica_%28emae%29.json", //EMAE//Estimador mensual de la actividad económica (EMAE)
  "IMACH", //IMACH
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/%C3%ADndice_de_producci%C3%B3n_industrial_%28ipi%29.json", //IPI Índice de producción industrial (IPI)
  "Energia Industrial", //Energia Industrial//Consumo Eléctrico Industrial
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/capacidad_instalada_de_la_industria.json", //Capacidad instalada de la industria
  //Producción Forestal Muebles
  "Aberturas", //Producción Forestal Aberturas //produccion industrial
  //Producción Tanino
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/indicador_sint%C3%A9tico_de_la_construcci%C3%B3n_%28isac%29.json", //ISAC//Indicador sintético de la construcción (ISAC)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/despacho_de_cemento.json", //Despacho de cemento (%)
  {//Cemento Total CHACO
    link: "http://epichaco.tk/api/cemento",
    title: { antestitle: '', campotitle: "producto", despuestitle: "" },
    subtitle: "Variacion interanual al",
    valor: { antesvalor: "", campovalor: "var_ia_s_e_chaco", despuesvalor: "%" },
    variable: { dondebuscar: "producto", quebuscar: "Cemento Total" },
    grafico: { ejex: "fecha", ejey: "var_ia_s_e_chaco" },
    graficoTexto: "var ai",
    nacion: false,
  },
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/valor_uva.json", //valor uva
  "Empleo Formal", //Empleo IERIC
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/tasa_de_desocupaci%C3%B3n.json", //Tasa de desocupación
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
  {//Producción Carbón Granel
    link: "http://epichaco.tk/api/forestalPrimario",
    title: { antestitle: '', campotitle: "producto", despuestitle: "" },
    subtitle: "Variacion interanual al",
    valor: { antesvalor: "", campovalor: "var_ia", despuesvalor: "%" },
    variable: { dondebuscar: "producto", quebuscar: "Carbón a granel" },
    grafico: { ejex: "fecha", ejey: "var_ia" },
    graficoTexto: "var ai",
    nacion: false,
  },
  {//Carbón en bolsa
    link: "http://epichaco.tk/api/forestalPrimario",
    title: { antestitle: '', campotitle: "producto", despuestitle: "" },
    subtitle: "Variacion mensual al",
    valor: { antesvalor: "", campovalor: "var_mens", despuesvalor: "%" },
    variable: { dondebuscar: "producto", quebuscar: "Carbón en bolsa" },
    grafico: { ejex: "fecha", ejey: "var_mens" },
    graficoTexto: "var_mens",
    nacion: false,
  },
  {//"Rollos", //Producción Rollos
    link: "http://epichaco.tk/api/forestalPrimario",
    title: { antestitle: '', campotitle: "producto", despuestitle: "" },
    subtitle: "Variacion interanual al",
    valor: { antesvalor: "", campovalor: "var_ia", despuesvalor: "%" },
    variable: { dondebuscar: "producto", quebuscar: "Rollos" },
    grafico: { ejex: "fecha", ejey: "var_ia" },
    graficoTexto: "var ai",
    nacion: false,
  },
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/recaudaci%C3%B3n_de_seguridad_social.json", //Recaudación de seguridad social
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/resultado_financiero.json", //Resultado financiero
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/resultado_fiscal_primario.json", //Resultado fiscal primario
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/recaudaci%C3%B3n_tributaria.json", //Recaudación tributaria
  {//Combustible
    link: "http://epichaco.tk/api/combustible",
    title: { antestitle: 'Combustible', campotitle: "producto", despuestitle: "" },
    subtitle: "Variacion interanual al",
    valor: { antesvalor: "", campovalor: "var_ia_chaco", despuesvalor: "%" },
    variable: { dondebuscar: "producto", quebuscar: "" },
    grafico: { ejex: "fecha", ejey: "var_ia_chaco" },
    graficoTexto: "var ai",
    nacion: false,
  },
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/ventas_en_supermercados_a_precios_constantes.json", //Ventas en supermercados a precios constantes
  {//"Supermercados", 
    link: "http://epichaco.tk/api/supermercado",
    title: { antestitle: 'Supermercados', campotitle: "", despuestitle: "CHACO" },
    subtitle: "Variacion interanual al",
    valor: { antesvalor: "", campovalor: "var_ia_chaco", despuesvalor: "%" },
    variable: { dondebuscar: "producto", quebuscar: "Valores Constantes (Base=2017)" },
    grafico: { ejex: "fecha", ejey: "var_ia_chaco" },
    graficoTexto: "var ai",
    nacion: false,
  },
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_autos.json", // Producción de autos (%)
  //Transferencias autos
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/patentamiento_de_autos.json", //Patentamiento de autos (%)
  "Patentamientos", //Patentamiento autos chaco
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/exportaci%C3%B3n_de_veh%C3%ADculos.json", //Exportación de vehículos (%)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/patentamiento_de_motos.json",//Patentamiento de motos (%)
  //Patentamiento motos chaco
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_bovinos.json", //Producción de bovinos (%)
  //Stock Bovinos
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/faena_de_bovinos.json", //Faena de bovinos (%)
  //Faena Bovinos (Nacion y Pcia) - variaciones
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/exportaci%C3%B3n_de_carne_vacuna.json", //Exportación de carne vacuna (%)
  {//Precios Terneros (Nación y Provincia) - Domo G
    link: "http://epichaco.tk/api/preciosGanaderos",
    title: { antestitle: 'Precios ternero', campotitle: "zona", despuestitle: "" },
    subtitle: "Valor al",
    valor: { antesvalor: "$", campovalor: "ternero", despuesvalor: "" },
    variable: { dondebuscar: "zona", quebuscar: "Domo Ganadero" },
    grafico: { ejex: "fecha", ejey: "ternero" },
    graficoTexto: "ternero",
    nacion: false,
  },
  {//Precios Terneros (Nación y Provincia) - Domo A/G
    link: "http://epichaco.tk/api/preciosGanaderos",
    title: { antestitle: 'Precios ternero', campotitle: "zona", despuestitle: "" },
    subtitle: "Valor al",
    valor: { antesvalor: "$", campovalor: "ternero", despuesvalor: "" },
    variable: { dondebuscar: "zona", quebuscar: "Agricola/Ganadera" },
    grafico: { ejex: "fecha", ejey: "ternero" },
    graficoTexto: "ternero",
    nacion: false,
  },
  {//Precios Terneros (Nación y Provincia) - ZOna Norte
    link: "http://epichaco.tk/api/preciosGanaderos",
    title: { antestitle: 'Precios ternero', campotitle: "zona", despuestitle: "" },
    subtitle: "Valor al",
    valor: { antesvalor: "$", campovalor: "ternero", despuesvalor: "" },
    variable: { dondebuscar: "zona", quebuscar: "Zona Norte" },
    grafico: { ejex: "fecha", ejey: "ternero" },
    graficoTexto: "ternero",
    nacion: false,
  },
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_porcinos.json", //Producción de porcinos (%)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/faena_de_porcinos.json", //Faena de porcinos (%)
  //Faena Porcinos (Nacion y Pcia) - Variaciones
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/exportaci%C3%B3n_de_porcinos.json", //Exportación de porcinos (%)
  //Stock Porcinos
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_leche.json", //Producción de leche (%)
  //$Girasol                         => nacional
  //$Maíz                            => nacional
  //$Soja                            => nacional
  //$Trigo                           => nacional
  //Precio Fibra Algodón - Merc Int => nacional
  //Precio Sorgo                    => nacional
  //Precio arroz cascara            => nacional
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/molienda_de_soja_-_granos_oleaginosos.json", //Molienda de soja - Granos oleaginosos (%)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/molienda_de_soja_-_aceite.json", //Molienda de soja - Aceite (%)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/molienda_de_soja_-_harina.json", //Molienda de soja - harina (%)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_gas.json", //Producción de gas (%)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_petr%C3%B3leo.json", //Producción de petróleo (%)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_acero_crudo.json", //Producción de acero crudo (%)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_laminados_no_planos_en_caliente.json", //Producción de laminados no planos en caliente (%)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_hierro_%28%25%29.json", //Producción de hierro (%)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/canasta_b%C3%A1sica_alimentaria.json", //Canasta básica alimentaria
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/canasta_b%C3%A1sica_total.json", //Canasta básica total
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/pobreza.json", //pobreza
  //Pobreza
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/indigencia.json", //Indigencia
  //Indigencia chaco
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/%C3%ADndice_de_confianza_del_consumidor_%28icc%29.json", //Índice de confianza del consumidor (ICC)
];
