export default [
   { //test para dolar oficial de la nacion
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/d%C3%B3lar_minorista.json",
    title: { antestitle: 'Dolar Oficial', campotitle: "tipo", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "$", campovalor: "cotizacion", despuesvalor: "" },
    variable: { dondebuscar: "tipo", quebuscar: "Venta" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "cotizacion" },
    graficoTexto: "cotizacion",
    nacion: true,
    dirOpuesta: false,
  }, 
  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/d%C3%B3lar_minorista.json",  //dólar_minorista
  
  { //dolar blue
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/d%C3%B3lar_blue.json",
    title: { antestitle: 'Dolar Minorista', campotitle: "tipo", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "$", campovalor: "cotizacion", despuesvalor: "" },
    variable: { dondebuscar: "tipo", quebuscar: "Venta" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "cotizacion" },
    graficoTexto: "cotizacion",
    nacion: true,
    dirOpuesta: false,
  },
  
  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/d%C3%B3lar_blue.json",       //dolar blu
  
  { //EURO VENTA
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/euro_minorista_-_venta.json",
    title: { antestitle: 'Euro', campotitle: "Tipo euro", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "$", campovalor: "Precio", despuesvalor: "" },
    variable: { dondebuscar: "Tipo euro", quebuscar: "Venta" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Precio" },
    graficoTexto: "Precio",
    nacion: true,
    dirOpuesta: false,
  },
  
  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/euro_minorista_-_venta.json", //EURO VENTA
  {//=== IPC Chaco ===
    link: "https://epichaco.tk/api/ipcgrResis",
    title: { antestitle: 'IPC GR', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACION MENSUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_mens", despuesvalor: "%" },
    variable: { dondebuscar: "sector", quebuscar: "Nivel General" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_mens" },
    graficoTexto: "VAR_MENS",
    nacion: false,
    dirOpuesta: false,
  },
  //=================
  
  { //IPC //Inflación (T)
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/inflaci%C3%B3n_%28ipc%29.json",
    title: { antestitle: '', campotitle: "Tipo", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN MENSUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "$", campovalor: "Indice", despuesvalor: "" },
    variable: { dondebuscar: "Tipo", quebuscar: "IPC" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Indice" },
    graficoTexto: "Indice",
    nacion: true,
    dirOpuesta: false,
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/inflaci%C3%B3n_%28ipc%29.json", //IPC //Inflación (T)
  
  { //IPC //Inflación mayorista
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/inflaci%C3%B3n_mayorista.json",
    title: { antestitle: 'Inflacion Mayorista', campotitle: "Tipo", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN MENSUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Cantidad", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "IPIM" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Cantidad" },
    graficoTexto: "Cantidad",
    nacion: true,
    dirOpuesta: false,
  },

  
  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/inflaci%C3%B3n_mayorista.json", //Inflación mayorista
  
  { //Inflación núcleo (IPC núcleo)
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/inflaci%C3%B3n_n%C3%BAcleo_%28ipc_n%C3%BAcleo%29.json",
    title: { antestitle: 'Inflación núcleo (IPC Núcleo)', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN MENSUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Indice", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "IPC NUCLEO" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Indice" },
    graficoTexto: "Indice",
    nacion: true,
    dirOpuesta: false,
  },

  
  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/inflaci%C3%B3n_n%C3%BAcleo_%28ipc_n%C3%BAcleo%29.json",//Inflación núcleo (IPC núcleo)
  
  { //PBI
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producto_bruto_interno_%28pbi%29.json",
    title: { antestitle: 'Producto Bruto Interno', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Indice", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "PBI" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Indice" },
    graficoTexto: "Indice",
    nacion: true,
    dirOpuesta: false,
  }, 
    
  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/producto_bruto_interno_%28pbi%29.json", //PBI//Producto bruto interno (PBI)
  
  { //EMAE
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/estimador_mensual_de_la_actividad_econ%C3%B3mica_%28emae%29.json",
    title: { antestitle: 'Estimador mensual de la actividad económica (EMAE)', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Indice", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "EMAE Interanual" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Indice" },
    graficoTexto: "Indice",
    nacion: true,
    dirOpuesta: false,
  }, 
    

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/estimador_mensual_de_la_actividad_econ%C3%B3mica_%28emae%29.json", //EMAE//Estimador mensual de la actividad económica (EMAE)
  { //IMACH
    link: "https://epichaco.tk/api/imach",
    title: { antestitle: 'IMACH', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACION INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_ia", despuesvalor: "%" },
    variable: { dondebuscar: "indice", quebuscar: "IMACH" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_ia" },
    graficoTexto: "var_ia",
    nacion: false,
    dirOpuesta: false,
  },

  { //IPI Índice de producción industrial (IPI)
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/%C3%ADndice_de_producci%C3%B3n_industrial_%28ipi%29.json",
    title: { antestitle: 'IPI Índice de producción industrial (IPI)', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Indice", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Índice de producción industrial" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Indice" },
    graficoTexto: "Indice",
    nacion: true,
    dirOpuesta: false,
  }, 
    

//"https://especialess3.lanacion.com.ar/monitor-economia-real/data/%C3%ADndice_de_producci%C3%B3n_industrial_%28ipi%29.json", //IPI Índice de producción industrial (IPI)
  { //Consumo Eléctrico Industrial
    link: "https://epichaco.tk/api/imach",
    title: { antestitle: 'Consumo', campotitle: "indice", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACION INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_ia", despuesvalor: "%" },
    variable: { dondebuscar: "indice", quebuscar: "Energía Industrial" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_ia" },
    graficoTexto: "var_ia",
    nacion: false,
    dirOpuesta: false,
  },

  { //Capacidad instalada de la industria
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/capacidad_instalada_de_la_industria.json",
    title: { antestitle: 'Capacidad instalada de la industria', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Cantidad", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "UCII" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Cantidad" },
    graficoTexto: "Cantidad",
    nacion: true,
    dirOpuesta: false,
  }, 
    

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/capacidad_instalada_de_la_industria.json", //Capacidad instalada de la industria
  { //Producción Forestal Muebles
    link: "https://epichaco.tk/api/forestoIndustria",
    title: { antestitle: 'Producción Forestal Muebles', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACION INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_ia", despuesvalor: "%" },
    variable: { dondebuscar: "tipo_produccion", quebuscar: "Muebles" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_ia" },
    graficoTexto: "var_ia",
    nacion: false,
    dirOpuesta: false,
  },
  {//Producción Forestal Aberturas //produccion industrial
    link: "https://epichaco.tk/api/forestoIndustria",
    title: { antestitle: 'Producción Forestal Aberturas', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACION INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_ia", despuesvalor: "%" },
    variable: { dondebuscar: "tipo_produccion", quebuscar: "Aberturas" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_ia" },
    graficoTexto: "var_ia",
    nacion: false,
    dirOpuesta: false,
  },
  //Producción Tanino

  { ////ISAC//Indicador sintético de la construcción (ISAC)
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/indicador_sint%C3%A9tico_de_la_construcci%C3%B3n_%28isac%29.json",
    title: { antestitle: 'Indicador sintético de la construcción (ISAC)', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Indice", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "ISAC" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Indice" },
    graficoTexto: "Indice",
    nacion: true,
    dirOpuesta: false,
  }, 
    //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/indicador_sint%C3%A9tico_de_la_construcci%C3%B3n_%28isac%29.json", //ISAC//Indicador sintético de la construcción (ISAC)
  
  
    { ////Despacho de cemento 
      link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/despacho_de_cemento.json",
      title: { antestitle: 'Despacho de cemento en toneladas', campotitle: "", despuestitle: "" },
      subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
      valor: { antesvalor: "", campovalor: "Cantidad", despuesvalor: "" },
      variable: { dondebuscar: "Tipo", quebuscar: "Despacho de cemento en toneladas" },
      variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
      grafico: { ejex: "Fecha", ejey: "Cantidad" },
      graficoTexto: "Cantidad",
      nacion: true,
      dirOpuesta: false,
    }, 
      

    //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/despacho_de_cemento.json", //Despacho de cemento (%)
  {//Cemento Total CHACO
    link: "http://epichaco.tk/api/cemento",
    title: { antestitle: '', campotitle: "producto", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACION INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_ia_s_e_chaco", despuesvalor: "%" },
    variable: { dondebuscar: "producto", quebuscar: "Cemento Total" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_ia_s_e_chaco" },
    graficoTexto: "var ai",
    nacion: false,
    dirOpuesta: false,
  },

  
  { ////valor UVA
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/valor_uva.json",
    title: { antestitle: 'Valor UVA', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Cantidad", despuesvalor: "" },
    variable: { dondebuscar: "Tipo", quebuscar: "UVA" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Cantidad" },
    graficoTexto: "Cantidad",
    nacion: true,
    dirOpuesta: false,
  }, 

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/valor_uva.json", //valor uva
  {//Empleo IERIC
    link: "https://epichaco.tk/api/empleoIERIC",
    title: { antestitle: 'Empleo IERIC', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACION INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_porcen_ia_empleo_chaco", despuesvalor: "%" },
    variable: { dondebuscar: "empleo_chaco", quebuscar: "" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_porcen_ia_empleo_chaco" },
    graficoTexto: "var_ia",
    nacion: false,
    dirOpuesta: false,
  },

  { ////Tasa de desocupación
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/tasa_de_desocupaci%C3%B3n.json",
    title: { antestitle: 'Tasa de desocupación', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR TRIMESTRAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Indice", despuesvalor: "" },
    variable: { dondebuscar: "Tipo", quebuscar: "Desocupación abierta" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Indice" },
    graficoTexto: "Indice",
    nacion: true,
    dirOpuesta: false,
  }, 

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/tasa_de_desocupaci%C3%B3n.json", //Tasa de desocupación
  {//Tasas de Desocupación (nación y pcia)
    link: "https://epichaco.tk/api/indicadoresLaborales",
    title: { antestitle: '', campotitle: "tasa", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACION INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "gran_resistencia", despuesvalor: "%" },
    variable: { dondebuscar: "gran_resistencia", quebuscar: "" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "gran_resistencia" },
    graficoTexto: "gran_resistencia",
    nacion: false,
    dirOpuesta: false,
  },

  { ////Trabajadores Registrados
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/trabajadores_registrados.json",
    title: { antestitle: 'Trabajadores Registrados', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR TRIMESTRAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Cantidad", despuesvalor: "" },
    variable: { dondebuscar: "Variación interanual", quebuscar: "En miles de trabajadores" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Cantidad" },
    graficoTexto: "Cantidad",
    nacion: true,
    dirOpuesta: false,
  }, 

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/trabajadores_registrados.json", //"Dat": "En miles de trabajadores", "Cantidad": "12.034,30", tratar captura de dato diferente
  {//Empleo general
    link: "https://epichaco.tk/api/empleoGeneral",
    title: { antestitle: 'Empleo general', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACION INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "variacion_ia_provincia", despuesvalor: "%" },
    variable: { dondebuscar: "empleo_provincia", quebuscar: "" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "variacion_ia_provincia" },
    graficoTexto: "variacion_ia_provincia",
    nacion: false,
    dirOpuesta: false,
  },
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/tasa_de_actividad_laboral.json", //"Tipo": "Actividad", "Indice": "46,00"
  { //Tasas de actividad (nación y pcia)
    link: "https://epichaco.tk/api/indicadoresLaborales",
    title: { antestitle: '', campotitle: "tasa", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACION INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "gran_resistencia", despuesvalor: "%" },
    variable: { dondebuscar: "tasa", quebuscar: "Tasa de Actividad" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "gran_resistencia" },
    graficoTexto: "gran_resistencia",
    nacion: false,
    dirOpuesta: false,
  },
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/tasa_de_empleo.json", //Tasa de empleo
  { //Tasas de Empleo (nación y Pcia)
    link: "https://epichaco.tk/api/indicadoresLaborales",
    title: { antestitle: '', campotitle: "tasa", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACION INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "gran_resistencia", despuesvalor: "%" },
    variable: { dondebuscar: "tasa", quebuscar: "Tasa de Empleo" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "gran_resistencia" },
    graficoTexto: "gran_resistencia",
    nacion: false,
    dirOpuesta: false,
  },
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/salario_m%C3%ADnimo%2C_vital_y_m%C3%B3vil.json", //"Tipo": "Salario mínimo, vital y móvil", "Salario": "16.875,00",
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/deuda_externa.json", //Deuda externa
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/saldo_comercial.json", //Saldo comercial
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/importaciones.json", //Importaciones
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/exportaciones.json", //Exportaciones
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/balanza_de_pagos.json", //Balanza de pagos
  {//Producción Carbón Granel
    link: "http://epichaco.tk/api/forestalPrimario",
    title: { antestitle: '', campotitle: "producto", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACION INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_ia", despuesvalor: "%" },
    variable: { dondebuscar: "producto", quebuscar: "Carbón a granel" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_ia" },
    graficoTexto: "var ai",
    nacion: false,
    dirOpuesta: false,
  },
  {//Carbón en bolsa
    link: "http://epichaco.tk/api/forestalPrimario",
    title: { antestitle: '', campotitle: "producto", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACION INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_mens", despuesvalor: "%" },
    variable: { dondebuscar: "producto", quebuscar: "Carbón en bolsa" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_mens" },
    graficoTexto: "var_mens",
    nacion: false,
    dirOpuesta: false,
  },
  {//"Rollos", //Producción Rollos
    link: "http://epichaco.tk/api/forestalPrimario",
    title: { antestitle: '', campotitle: "producto", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACION INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_ia", despuesvalor: "%" },
    variable: { dondebuscar: "producto", quebuscar: "Rollos" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_ia" },
    graficoTexto: "var ai",
    nacion: false,
    dirOpuesta: false,
  },
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/recaudaci%C3%B3n_de_seguridad_social.json", //Recaudación de seguridad social
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/resultado_financiero.json", //Resultado financiero
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/resultado_fiscal_primario.json", //Resultado fiscal primario
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/recaudaci%C3%B3n_tributaria.json", //Recaudación tributaria
  {//Combustible
    link: "http://epichaco.tk/api/combustible",
    title: { antestitle: 'Combustible', campotitle: "producto", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACION INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_ia_chaco", despuesvalor: "%" },
    variable: { dondebuscar: "producto", quebuscar: "Nafta+Gasoil" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_ia_chaco" },
    graficoTexto: "var ai",
    nacion: false,
    dirOpuesta: false,
  },
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/ventas_en_supermercados_a_precios_constantes.json", //Ventas en supermercados a precios constantes
  {//"Supermercados", 
    link: "http://epichaco.tk/api/supermercado",
    title: { antestitle: 'Supermercados', campotitle: "", despuestitle: "CHACO" },
    subtitle: { antessubtitle: 'VARIACION INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_ia_chaco", despuesvalor: "%" },
    variable: { dondebuscar: "producto", quebuscar: "Valores Constantes (Base=2017)" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_ia_chaco" },
    graficoTexto: "var ai",
    nacion: false,
    dirOpuesta: false,
  },
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_autos.json", // Producción de autos (%)
  {//Transferencias autos
    link: "http://epichaco.tk/api/vehiculo",
    title: { antestitle: '', campotitle: "categoria", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACION INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_ia_chaco_original", despuesvalor: "%" },
    variable: { dondebuscar: "categoria", quebuscar: "Transferencia de autos" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_ia_chaco_original" },
    graficoTexto: "var_ia_chaco_original",
    nacion: false,
    dirOpuesta: false,
  },
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/patentamiento_de_autos.json", //Patentamiento de autos (%)
   {//Patentamiento autos chaco
    link: "http://epichaco.tk/api/vehiculo",
    title: { antestitle: '', campotitle: "categoria", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACION INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_ia_chaco_original", despuesvalor: "%" },
    variable: { dondebuscar: "categoria", quebuscar: "Patentamiento de autos" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_ia_chaco_original" },
    graficoTexto: "var_ia_chaco_original",
    nacion: false,
    dirOpuesta: false,
  },
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/exportaci%C3%B3n_de_veh%C3%ADculos.json", //Exportación de vehículos (%)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/patentamiento_de_motos.json",//Patentamiento de motos (%)
   {//Patentamiento motos chaco
    link: "http://epichaco.tk/api/vehiculo",
    title: { antestitle: '', campotitle: "categoria", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACION INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_ia_chaco_original", despuesvalor: "%" },
    variable: { dondebuscar: "categoria", quebuscar: "Patentamiento de motos" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_ia_chaco_original" },
    graficoTexto: "var_ia_chaco_original",
    nacion: false,
    dirOpuesta: false,
  },
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_bovinos.json", //Producción de bovinos (%)
   {//Stock Bovinos
    link: "http://epichaco.tk/api/stockBovinoPorcino",
    title: { antestitle: 'Stock', campotitle: "actividad_producto_nombre", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "total_cabezas", despuesvalor: "Millones" },
    variable: { dondebuscar: "actividad_producto_nombre", quebuscar: "Bovino" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "total_cabezas" },
    graficoTexto: "total_cabezas",
    nacion: false,
    dirOpuesta: false,
  },
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/faena_de_bovinos.json", //Faena de bovinos (%)
  
  {//Faena Bovinos (Nacion y Pcia) - variaciones
    link: "http://epichaco.tk/api/faena",
    title: { antestitle: 'Faena', campotitle: "categoria", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACION MENSUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_ia_chaco", despuesvalor: "%" },
    variable: { dondebuscar: "categoria", quebuscar: "Bovina" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_ia_chaco" },
    graficoTexto: "var_ia_chaco",
    nacion: false,
    dirOpuesta: false,
  },
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/exportaci%C3%B3n_de_carne_vacuna.json", //Exportación de carne vacuna (%)
  {//Precios Terneros (Nación y Provincia) - Domo G
    link: "http://epichaco.tk/api/preciosGanaderos",
    title: { antestitle: 'Precios ternero', campotitle: "zona", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "$", campovalor: "ternero", despuesvalor: "" },
    variable: { dondebuscar: "zona", quebuscar: "Domo Ganadero" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "ternero" },
    graficoTexto: "ternero",
    nacion: false,
    dirOpuesta: false,
  },
  {//Precios Terneros (Nación y Provincia) - Domo A/G
    link: "http://epichaco.tk/api/preciosGanaderos",
    title: { antestitle: 'Precios ternero', campotitle: "zona", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "$", campovalor: "ternero", despuesvalor: "" },
    variable: { dondebuscar: "zona", quebuscar: "Agricola/Ganadera" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "ternero" },
    graficoTexto: "ternero",
    nacion: false,
    dirOpuesta: false,
  },
  {//Precios Terneros (Nación y Provincia) - ZOna Norte
    link: "http://epichaco.tk/api/preciosGanaderos",
    title: { antestitle: 'Precios ternero', campotitle: "zona", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "$", campovalor: "ternero", despuesvalor: "" },
    variable: { dondebuscar: "zona", quebuscar: "Zona Norte" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "ternero" },
    graficoTexto: "ternero",
    nacion: false,
    dirOpuesta: false,
  },
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_porcinos.json", //Producción de porcinos (%)
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/faena_de_porcinos.json", //Faena de porcinos (%)
  {//Faena Porcinos (Nacion y Pcia) - Variaciones
    link: "http://epichaco.tk/api/faena",
    title: { antestitle: 'Faena', campotitle: "categoria", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACION MENSUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_ia_chaco", despuesvalor: "%" },
    variable: { dondebuscar: "categoria", quebuscar: "Porcina" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_ia_chaco" },
    graficoTexto: "var_ia_chaco",
    nacion: false,
    dirOpuesta: false,
  },
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/exportaci%C3%B3n_de_porcinos.json", //Exportación de porcinos (%)
   { //Stock Porcinos
    link: "http://epichaco.tk/api/stockBovinoPorcino",
    title: { antestitle: 'Stock', campotitle: "actividad_producto_nombre", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "total_cabezas", despuesvalor: "" },
    variable: { dondebuscar: "actividad_producto_nombre", quebuscar: "Porcino" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "total_cabezas" },
    graficoTexto: "total_cabezas",
    nacion: false,
    dirOpuesta: false,
  },
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_leche.json", //Producción de leche (%)
  { //$Girasol   
    link: "http://epichaco.tk/api/preciosAgroDiarios",
    title: { antestitle: '', campotitle: "precio", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "$", campovalor: "valor_actual", despuesvalor: "" },
    variable: { dondebuscar: "precio", quebuscar: "Girasol" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "valor_actual" },
    graficoTexto: "Girasol",
    nacion: false,
    dirOpuesta: false,
  },
  { //$Maíz                            => nacional
    link: "http://epichaco.tk/api/preciosAgroDiarios",
    title: { antestitle: '', campotitle: "precio", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "$", campovalor: "valor_actual", despuesvalor: "" },
    variable: { dondebuscar: "precio", quebuscar: "Maíz" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "valor_actual" },
    graficoTexto: "Maíz",
    nacion: false,
    dirOpuesta: false,
  },
  { //$Soja                            => nacional
    link: "http://epichaco.tk/api/preciosAgroDiarios",
    title: { antestitle: '', campotitle: "precio", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "$", campovalor: "valor_actual", despuesvalor: "" },
    variable: { dondebuscar: "precio", quebuscar: "Soja" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "valor_actual" },
    graficoTexto: "Soja",
    nacion: false,
    dirOpuesta: false,
  },
  { //$Trigo                           => nacional
    link: "http://epichaco.tk/api/preciosAgroDiarios",
    title: { antestitle: '', campotitle: "precio", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "$", campovalor: "valor_actual", despuesvalor: "" },
    variable: { dondebuscar: "precio", quebuscar: "Trigo de Pan" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "valor_actual" },
    graficoTexto: "Trigo",
    nacion: false,
    dirOpuesta: false,
  },
  { //Precio Fibra Algodón - Merc Int => nacional
    link: "http://epichaco.tk/api/preciosAgroMensuales",
    title: { antestitle: '', campotitle: "producto", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "$", campovalor: "precio", despuesvalor: "" },
    variable: { dondebuscar: "producto", quebuscar: "Fibra de Algodón-Mercado Interno U$S| KG" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "precio" },
    graficoTexto: "C-1/2",
    nacion: false,
    dirOpuesta: false,
  },
  { //Precio Sorgo                    => nacional
    link: "http://epichaco.tk/api/preciosAgroMensuales",
    title: { antestitle: '', campotitle: "producto", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "$", campovalor: "precio", despuesvalor: "" },
    variable: { dondebuscar: "producto", quebuscar: "Sorgo U$S| Tonelada" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "precio" },
    graficoTexto: "precio",
    nacion: false,
    dirOpuesta: false,
  },
  { //Precio arroz cascara            => nacional
    link: "http://epichaco.tk/api/preciosAgroMensuales",
    title: { antestitle: '', campotitle: "producto", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "$", campovalor: "precio", despuesvalor: "" },
    variable: { dondebuscar: "producto", quebuscar: "Arroz U$S| Tonelada" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "precio" },
    graficoTexto: "precio",
    nacion: false,
    dirOpuesta: false,
  },
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
  { //Pobreza
    link: "http://epichaco.tk/api/pobrezaIndigencia",
    title: { antestitle: '', campotitle: "tasa", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "semestre", fechaSubtitle: false },
    valor: { antesvalor: "", campovalor: "gran_resistencia", despuesvalor: "%" },
    variable: { dondebuscar: "tasa", quebuscar: "Pobreza" },
    variableOpc: { dondebuscarOpc: "alcance", quebuscarOpc: "Gran Resistencia" },
    grafico: { ejex: "fecha", ejey: "gran_resistencia" },
    graficoTexto: "gran_resistencia",
    nacion: false,
    dirOpuesta: false,
  },
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/indigencia.json", //Indigencia
  { //Indigencia chaco PONER DOBLE FILTRO
    link: "http://epichaco.tk/api/pobrezaIndigencia",
    title: { antestitle: '', campotitle: "tasa", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "semestre", fechaSubtitle: false },
    valor: { antesvalor: "", campovalor: "gran_resistencia", despuesvalor: "%" },
    variable: { dondebuscar: "tasa", quebuscar: "Indigencia" },
    variableOpc: { dondebuscarOpc: "alcance", quebuscarOpc: "Gran Resistencia" },
    grafico: { ejex: "fecha", ejey: "gran_resistencia" },
    graficoTexto: "gran_resistencia",
    nacion: false,
    dirOpuesta: false,
  },
  "https://especialess3.lanacion.com.ar/monitor-economia-real/data/%C3%ADndice_de_confianza_del_consumidor_%28icc%29.json", //Índice de confianza del consumidor (ICC)
];
