export default [
  { //test para dolar oficial de la nacion decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2}
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/d%C3%B3lar_minorista.json",
    title: { antestitle: 'Dolar Oficial -', campotitle: "tipo", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: " $", campovalor: "cotizacion", despuesvalor: "" },
    variable: { dondebuscar: "tipo", quebuscar: "Venta" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "cotizacion" },
    graficoTexto: "Cotización:",
    nacion: true,
    arrow: { dirOpuesta: null, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/d%C3%B3lar_minorista.json",  //dólar_minorista

  { //dolar blue
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/d%C3%B3lar_blue.json",
    title: { antestitle: 'Dolar Blue -', campotitle: "tipo", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: " $", campovalor: "cotizacion", despuesvalor: "" },
    variable: { dondebuscar: "tipo", quebuscar: "Venta" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "cotizacion" },
    graficoTexto: "Cotización:",
    nacion: true,
    arrow: {dirOpuesta: null, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/d%C3%B3lar_blue.json",       //dolar blu

  { //EURO VENTA
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/euro_minorista_-_venta.json",
    title: { antestitle: 'Euro Oficial -', campotitle: "Tipo euro", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: " $", campovalor: "Precio", despuesvalor: "" },
    variable: { dondebuscar: "Tipo euro", quebuscar: "Venta" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Precio" },
    graficoTexto: "Cotización:",
    nacion: true,
    arrow: {dirOpuesta: null, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/euro_minorista_-_venta.json", //EURO VENTA
  {//=== IPC Chaco ===
    link: "https://epichaco.tk/api/ipcgrResis",
    title: { antestitle: 'IPC', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN MENSUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_mens", despuesvalor: "%" },
    variable: { dondebuscar: "sector", quebuscar: "Nivel General" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_mens" },
    graficoTexto: "Variación:",
    nacion: false,
    arrow: {dirOpuesta: null, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },
  //=================

  { //IPC //Inflación (T)
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/inflaci%C3%B3n_%28ipc%29.json",
    title: { antestitle: '', campotitle: "Tipo", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN MENSUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Indice", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "IPC" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Indice" },
    graficoTexto: "Variación:",
    nacion: true,
    arrow: {dirOpuesta: null, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/inflaci%C3%B3n_%28ipc%29.json", //IPC //Inflación (T)

  { //IPC //Inflación mayorista
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/inflaci%C3%B3n_mayorista.json",
    title: { antestitle: 'Inflación Mayorista', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN MENSUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Cantidad", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "IPIM" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Cantidad" },
    graficoTexto: "Variación:",
    nacion: true,
    arrow: {dirOpuesta: null, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/inflaci%C3%B3n_mayorista.json", //Inflación mayorista

  { //Inflación núcleo (IPC núcleo)
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/inflaci%C3%B3n_n%C3%BAcleo_%28ipc_n%C3%BAcleo%29.json",
    title: { antestitle: 'IPC Núcleo', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN MENSUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Indice", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "IPC NUCLEO" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Indice" },
    graficoTexto: "Variación:",
    nacion: true,
    arrow: {dirOpuesta: null, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/inflaci%C3%B3n_n%C3%BAcleo_%28ipc_n%C3%BAcleo%29.json",//Inflación núcleo (IPC núcleo)

  { //PBI
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producto_bruto_interno_%28pbi%29.json",
    title: { antestitle: 'PBI', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Indice", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "PBI" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Indice" },
    graficoTexto: "Variación:",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/producto_bruto_interno_%28pbi%29.json", //PBI//Producto bruto interno (PBI)

  { //EMAE
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/estimador_mensual_de_la_actividad_econ%C3%B3mica_%28emae%29.json",
    title: { antestitle: 'EMAE', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Indice", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "EMAE Interanual" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Indice" },
    graficoTexto: "Variación:",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: true},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/estimador_mensual_de_la_actividad_econ%C3%B3mica_%28emae%29.json", //EMAE//Estimador mensual de la actividad económica (EMAE)
  { //IMACH
    link: "https://epichaco.tk/api/imach",
    title: { antestitle: 'IMACH', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_ia", despuesvalor: "%" },
    variable: { dondebuscar: "indice", quebuscar: "IMACH" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_ia" },
    graficoTexto: "Variación:",
    nacion: false,
    arrow: {dirOpuesta: false, varIntAnual: true},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  { //IPI Índice de producción industrial (IPI)
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/%C3%ADndice_de_producci%C3%B3n_industrial_%28ipi%29.json",
    title: { antestitle: 'Índice de Producción Industrial (IPI)', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Indice", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Índice de producción industrial" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Indice" },
    graficoTexto: "Variación:",
    nacion: true,
    arrow: {dirOpuesta: true, varIntAnual: true},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },


  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/%C3%ADndice_de_producci%C3%B3n_industrial_%28ipi%29.json", //IPI Índice de producción industrial (IPI)
  { //Consumo Eléctrico Industrial
    link: "https://epichaco.tk/api/imach",
    title: { antestitle: 'Consumo Eléctrico Industrial', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_ia", despuesvalor: "%" },
    variable: { dondebuscar: "indice", quebuscar: "Energía Industrial" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_ia" },
    graficoTexto: "Variación:",
    nacion: false,
    arrow: {dirOpuesta: true, varIntAnual: true},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  { //Capacidad instalada de la industria
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/capacidad_instalada_de_la_industria.json",
    title: { antestitle: 'Capacidad Instalada Industrial', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Cantidad", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "UCII" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Cantidad" },
    graficoTexto: "Variación:",
    nacion: true,
    arrow: {dirOpuesta: true, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },


  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/capacidad_instalada_de_la_industria.json", //Capacidad instalada de la industria
  { //Producción Forestal Muebles
    link: "https://epichaco.tk/api/forestoIndustria",
    title: { antestitle: 'Producción Muebles', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_ia", despuesvalor: "%" },
    variable: { dondebuscar: "tipo_produccion", quebuscar: "Muebles" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_ia" },
    graficoTexto: "Variación:",
    nacion: false,
    arrow: {dirOpuesta: true, varIntAnual: true},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },
  {//Producción Forestal Aberturas //produccion industrial
    link: "https://epichaco.tk/api/forestoIndustria",
    title: { antestitle: 'Producción Aberturas', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_ia", despuesvalor: "%" },
    variable: { dondebuscar: "tipo_produccion", quebuscar: "Aberturas" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_ia" },
    graficoTexto: "Variación:",
    nacion: false,
    arrow: {dirOpuesta: true, varIntAnual: true},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  {//Producción Tanino
    link: "https://epichaco.tk/api/forestoIndustria",
    title: { antestitle: 'Producción Tanino', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_ia", despuesvalor: "%" },
    variable: { dondebuscar: "tipo_produccion", quebuscar: "Tanino" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_ia" },
    graficoTexto: "Variación:",
    nacion: false,
    arrow: {dirOpuesta: true, varIntAnual: true},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  { ////ISAC//Indicador sintético de la construcción (ISAC)
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/indicador_sint%C3%A9tico_de_la_construcci%C3%B3n_%28isac%29.json",
    title: { antestitle: 'Indicador Sintético de la Construcción (ISAC)', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Indice", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "ISAC" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Indice" },
    graficoTexto: "Variación:",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: true},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },
  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/indicador_sint%C3%A9tico_de_la_construcci%C3%B3n_%28isac%29.json", //ISAC//Indicador sintético de la construcción (ISAC)


  /* { ////Despacho de cemento 
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
  },  */


  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/despacho_de_cemento.json", //Despacho de cemento (%)
  {//Cemento Total CHACO
    link: "http://epichaco.tk/api/cemento",
    title: { antestitle: 'Despacho de Cemento', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_ia_s_e_chaco", despuesvalor: "%" },
    variable: { dondebuscar: "producto", quebuscar: "Cemento Total" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_ia_s_e_chaco" },
    graficoTexto: "Variación:",
    nacion: false,
    arrow: {dirOpuesta: false, varIntAnual: true},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },


  { ////valor UVA
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/valor_uva.json",
    title: { antestitle: 'Valor UVA', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: " $", campovalor: "Cantidad", despuesvalor: "" },
    variable: { dondebuscar: "Tipo", quebuscar: "UVA" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Cantidad" },
    graficoTexto: "Valor:",
    nacion: true,
    arrow: {dirOpuesta: null, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/valor_uva.json", //valor uva
  {//Empleo IERIC
    link: "https://epichaco.tk/api/empleoIERIC",
    title: { antestitle: 'Empleo IERIC', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_porcen_ia_empleo_chaco", despuesvalor: "%" },
    variable: { dondebuscar: "empleo_chaco", quebuscar: "" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_porcen_ia_empleo_chaco" },
    graficoTexto: "Variación:",
    nacion: false,
    arrow: {dirOpuesta: false, varIntAnual: true},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  { ////Tasa de desocupación
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/tasa_de_desocupaci%C3%B3n.json",
    title: { antestitle: 'Tasa de Desocupación', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR TRIMESTRAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Indice", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Desocupación abierta" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Indice" },
    graficoTexto: "Valor:",
    nacion: true,
    arrow: {dirOpuesta: null, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/tasa_de_desocupaci%C3%B3n.json", //Tasa de desocupación
  {//Tasas de Desocupación (nación y pcia)
    link: "https://epichaco.tk/api/indicadoresLaborales",
    title: { antestitle: 'Tasa de Desocupación', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "gran_resistencia", despuesvalor: "%" },
    variable: { dondebuscar: "tasa", quebuscar: "Tasa de Desocupación" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "gran_resistencia" },
    graficoTexto: "Valor:",
    nacion: false,
    arrow: {dirOpuesta: null, varIntAnual: true},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  { ////Trabajadores Registrados
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/trabajadores_registrados.json",
    title: { antestitle: 'Empleo Registrado', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR TRIMESTRAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Variación interanual", despuesvalor: "%" },
    variable: { dondebuscar: "Dat", quebuscar: "En miles de trabajadores" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Variación interanual" },
    graficoTexto: "Variación:",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/trabajadores_registrados.json", //"Dat": "En miles de trabajadores", "Cantidad": "12.034,30", tratar captura de dato diferente
  {//Empleo general
    link: "https://epichaco.tk/api/empleoGeneral",
    title: { antestitle: 'Empleo Registrado', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "variacion_ia_provincia", despuesvalor: "%" },
    variable: { dondebuscar: "rama_de_actividad", quebuscar: "Total" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "variacion_ia_provincia" },
    graficoTexto: "Variación:",
    nacion: false,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },


  { ////Tasa de actividad laboral
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/tasa_de_actividad_laboral.json",
    title: { antestitle: 'Tasa de Actividad Laboral', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR TRIMESTRAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Indice", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Actividad" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Indice" },
    graficoTexto: "Valor:",
    nacion: true,
    arrow: {dirOpuesta: null, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },
  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/tasa_de_actividad_laboral.json", //"Tipo": "Actividad", "Indice": "46,00"
  { //Tasas de actividad (nación y pcia)
    link: "https://epichaco.tk/api/indicadoresLaborales",
    title: { antestitle: 'Tasa de Actividad Laboral', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "gran_resistencia", despuesvalor: "%" },
    variable: { dondebuscar: "tasa", quebuscar: "Tasa de Actividad" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "gran_resistencia" },
    graficoTexto: "Valor:",
    nacion: false,
    arrow: {dirOpuesta: null, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  { ////Tasa de empleo
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/tasa_de_empleo.json",
    title: { antestitle: 'Tasa de Empleo', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR TRIMESTRAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Indice", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Empleo" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Indice" },
    graficoTexto: "Valor:",
    nacion: true,
    arrow: {dirOpuesta: null, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/tasa_de_empleo.json", //Tasa de empleo
  { //Tasas de Empleo (nación y Pcia)
    link: "https://epichaco.tk/api/indicadoresLaborales",
    title: { antestitle: 'Tasa de Empleo', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "gran_resistencia", despuesvalor: "%" },
    variable: { dondebuscar: "tasa", quebuscar: "Tasa de Empleo" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "gran_resistencia" },
    graficoTexto: "Valor:",
    nacion: false,
    arrow: {dirOpuesta: null, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  { ////Salario mínima, vital y móvil
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/salario_m%C3%ADnimo%2C_vital_y_m%C3%B3vil.json",
    title: { antestitle: 'Salario Mínimo, Vital y Móvil', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: " $", campovalor: "Salario", despuesvalor: "" },
    variable: { dondebuscar: "Tipo", quebuscar: "Salario mínimo, vital y móvil" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Salario" },
    graficoTexto: "Valor:",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 0, minimumFractionDigits: 0} 
  },

  /* -------------REVISADOS-------------- */

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/salario_m%C3%ADnimo%2C_vital_y_m%C3%B3vil.json", //"Tipo": "Salario mínimo, vital y móvil", "Salario": "16.875,00",


  { ////Deuda externa
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/deuda_externa.json",
    title: { antestitle: 'Deuda externa', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR TRIMESTRAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: " US$", campovalor: "Indice", despuesvalor: "" },
    variable: { dondebuscar: "Tipo", quebuscar: "Deuda externa" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Indice" },
    graficoTexto: "Valor:",
    nacion: true,
    arrow: {dirOpuesta: true, varIntAnual: false},
    dateFormart: { subtitle: "MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 0, minimumFractionDigits: 0} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/deuda_externa.json", //Deuda externa

  { ////Saldo comercial
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/saldo_comercial.json",
    title: { antestitle: 'Saldo comercial', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: " US$", campovalor: "Millones de dólares", despuesvalor: "" },
    variable: { dondebuscar: "Tipo", quebuscar: "Saldo comercial" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Millones de dólares" },
    graficoTexto: "Valor:",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 0, minimumFractionDigits: 0} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/saldo_comercial.json", //Saldo comercial

  { ////Importaciones
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/importaciones.json",
    title: { antestitle: 'Importaciones', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Variación interanual", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Importaciones" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Variación interanual" },
    graficoTexto: "Variación:",
    nacion: true,
    arrow: {dirOpuesta: true, varIntAnual: false},
    dateFormart: { subtitle: "MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/importaciones.json", //Importaciones

  { ////Exportaciones
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/exportaciones.json",
    title: { antestitle: 'Exportaciones', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Variación interanual", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Exportaciones" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Variación interanual" },
    graficoTexto: "Variación:",
    nacion: true,
    arrow: {dirOpuesta: true, varIntAnual: false},
    dateFormart: { subtitle: "MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/exportaciones.json", //Exportaciones

  { ////Balanza de pagos
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/balanza_de_pagos.json",
    title: { antestitle: 'Balanza de pagos', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: " US$", campovalor: "Cantidad", despuesvalor: "" },
    variable: { dondebuscar: "Tipo", quebuscar: "cuenta corriente por trimestre" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Cantidad" },
    graficoTexto: "Valor:",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 0, minimumFractionDigits: 0} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/balanza_de_pagos.json", //Balanza de pagos
  {//Producción Carbón Granel
    link: "http://epichaco.tk/api/forestalPrimario",
    title: { antestitle: 'Producción Carbón Granel', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_ia", despuesvalor: "%" },
    variable: { dondebuscar: "producto", quebuscar: "Carbón a granel" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_ia" },
    graficoTexto: "Variación:",
    nacion: false,
    arrow: {dirOpuesta: false, varIntAnual: true},
    dateFormart: { subtitle: "MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },
  {//Carbón en bolsa
    link: "http://epichaco.tk/api/forestalPrimario",
    title: { antestitle: 'Producción Carbón Bolsa', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_mens", despuesvalor: "%" },
    variable: { dondebuscar: "producto", quebuscar: "Carbón en bolsa" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_mens" },
    graficoTexto: "Variación:",
    nacion: false,
    arrow: {dirOpuesta: false, varIntAnual: true},
    dateFormart: { subtitle: "MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },
  {//"Rollos", //Producción Rollos
    link: "http://epichaco.tk/api/forestalPrimario",
    title: { antestitle: 'Producción Rollos', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_ia", despuesvalor: "%" },
    variable: { dondebuscar: "producto", quebuscar: "Rollos" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_ia" },
    graficoTexto: "Variación:",
    nacion: false,
    arrow: {dirOpuesta: false, varIntAnual: true},
    dateFormart: { subtitle: "MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  { ////Recaudación de seguridad social
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/recaudaci%C3%B3n_de_seguridad_social.json",
    title: { antestitle: 'Recaudación de Seguridad Social', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Var inteanual", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Impuestos vinculados al empleo" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Var inteanual" },
    graficoTexto: "Variación:",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },


  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/recaudaci%C3%B3n_de_seguridad_social.json", //Recaudación de seguridad social

  { ////Resultado financiero
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/resultado_financiero.json",
    title: { antestitle: 'Resultado Financiero', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: " $", campovalor: "Cantidad", despuesvalor: "" },
    variable: { dondebuscar: "Tipo", quebuscar: "Resultado financiero" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Cantidad" },
    graficoTexto: "Valor:",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 0, minimumFractionDigits: 0} 
  },


  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/resultado_financiero.json", //Resultado financiero

  { ////Resultado fiscal primario
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/resultado_fiscal_primario.json",
    title: { antestitle: 'Resultado Fiscal Primario', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: " $", campovalor: "Cantidad", despuesvalor: "" },
    variable: { dondebuscar: "Tipo", quebuscar: "Resultado primario" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Cantidad" },
    graficoTexto: "Valor:",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 0, minimumFractionDigits: 0} 
  },


  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/resultado_fiscal_primario.json", //Resultado fiscal primario

  { ////Recaudación tributaria
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/recaudaci%C3%B3n_tributaria.json",
    title: { antestitle: 'Recaudación tributaria', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Variación interanual", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Recaudación Tributaria" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Variación interanual" },
    graficoTexto: "Variación:",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },


  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/recaudaci%C3%B3n_tributaria.json", //Recaudación tributaria
  {//Combustible
    link: "http://epichaco.tk/api/combustible",
    title: { antestitle: 'Combustible', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_ia_chaco", despuesvalor: "%" },
    variable: { dondebuscar: "producto", quebuscar: "Nafta+Gasoil" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_ia_chaco" },
    graficoTexto: "Variación:",
    nacion: false,
    arrow: {dirOpuesta: false, varIntAnual: true},
    dateFormart: { subtitle: "MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },


  { ////Ventas en supermercados a precios constantes
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/ventas_en_supermercados_a_precios_constantes.json",
    title: { antestitle: 'Ventas en Supermercados (a precios constantes)', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Variación interanual", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Ventas en supermercados a precios constantes" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Variación interanual" },
    graficoTexto: "Variación:",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: true},
    dateFormart: { subtitle: "MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },


  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/ventas_en_supermercados_a_precios_constantes.json", //Ventas en supermercados a precios constantes
  {//"Supermercados", 
    link: "http://epichaco.tk/api/supermercado",
    title: { antestitle: 'Ventas en Supermercados (a precios constantes)', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "var_ia_chaco", despuesvalor: "%" },
    variable: { dondebuscar: "producto", quebuscar: "Valores Constantes (Base=2017)" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "var_ia_chaco" },
    graficoTexto: "Variación:",
    nacion: false,
    arrow: {dirOpuesta: false, varIntAnual: true},
    dateFormart: { subtitle: "MM/YYYY", graph: "MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //============================ visto 18/08/2020 ======================================

  { //// Producción de autos (%)
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_autos.json",
    title: { antestitle: 'Producción de autos (en unidades)', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Producción", despuesvalor: "" },
    variable: { dondebuscar: "Tipo", quebuscar: "Automóviles" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Producción" },
    graficoTexto: "Producción",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },



  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_autos.json", // Producción de autos (%)
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
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  { //// Patentamiento de autos
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/patentamiento_de_autos.json",
    title: { antestitle: 'Patentamiento de autos (en unidades)', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Cantidad", despuesvalor: "" },
    variable: { dondebuscar: "Categoria", quebuscar: "Patentamientos de vehiculos" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Cantidad" },
    graficoTexto: "Cantidad",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/patentamiento_de_autos.json", //Patentamiento de autos (%)
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
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  { //// Exportación de Vehículos
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/exportaci%C3%B3n_de_veh%C3%ADculos.json",
    title: { antestitle: 'Exportación de Vehículos (en unidades)', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Producción", despuesvalor: "" },
    variable: { dondebuscar: "Tipo", quebuscar: "Exportaciones" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Producción" },
    graficoTexto: "Producción",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },


  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/exportaci%C3%B3n_de_veh%C3%ADculos.json", //Exportación de vehículos (%)

  { //// Patentamiento de motos
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/patentamiento_de_motos.json",
    title: { antestitle: 'Patentamiento de motos', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Var interanual", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Patentamiento de motovehículos" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Var interanual" },
    graficoTexto: "Var interanual",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/patentamiento_de_motos.json",//Patentamiento de motos (%)
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
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  { //// Producción de bovinos
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_bovinos.json",
    title: { antestitle: 'Producción en toneladas de res con hueso', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Var interanual", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "producción en toneladas de res con hueso" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Var interanual" },
    graficoTexto: "Var interanual",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },


  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_bovinos.json", //Producción de bovinos (%)
  {//Stock Bovinos
    link: "http://epichaco.tk/api/stockBovinoPorcino",
    title: { antestitle: 'Stock', campotitle: "actividad_producto_nombre", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "total_cabezas", despuesvalor: "" },
    variable: { dondebuscar: "actividad_producto_nombre", quebuscar: "Bovino" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "total_cabezas" },
    graficoTexto: "total_cabezas",
    nacion: false,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  { //// Faena de bovinos
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/faena_de_bovinos.json",
    title: { antestitle: 'Faena de bovinos', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Var interanual", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Faena" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Var interanual" },
    graficoTexto: "Var interanual",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },


  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/faena_de_bovinos.json", //Faena de bovinos (%)

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
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  { //// Exportación de carne vacuna
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/exportaci%C3%B3n_de_carne_vacuna.json",
    title: { antestitle: 'Exportación de carne vacuna', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Var interanual", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Exportación de carne vacuna en toneladas" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Var interanual" },
    graficoTexto: "Var interanual",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },


  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/exportaci%C3%B3n_de_carne_vacuna.json", //Exportación de carne vacuna (%)
  {//Precios Terneros (Nación y Provincia) - Domo G
    link: "http://epichaco.tk/api/preciosGanaderos",
    title: { antestitle: 'Precios ternero', campotitle: "zona", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: " $", campovalor: "ternero", despuesvalor: "" },
    variable: { dondebuscar: "zona", quebuscar: "Domo Ganadero" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "ternero" },
    graficoTexto: "ternero",
    nacion: false,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },
  {//Precios Terneros (Nación y Provincia) - Domo A/G
    link: "http://epichaco.tk/api/preciosGanaderos",
    title: { antestitle: 'Precios ternero', campotitle: "zona", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: " $", campovalor: "ternero", despuesvalor: "" },
    variable: { dondebuscar: "zona", quebuscar: "Agricola/Ganadera" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "ternero" },
    graficoTexto: "ternero",
    nacion: false,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },
  {//Precios Terneros (Nación y Provincia) - ZOna Norte
    link: "http://epichaco.tk/api/preciosGanaderos",
    title: { antestitle: 'Precios ternero', campotitle: "zona", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: " $", campovalor: "ternero", despuesvalor: "" },
    variable: { dondebuscar: "zona", quebuscar: "Zona Norte" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "ternero" },
    graficoTexto: "ternero",
    nacion: false,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  { //// Producción de porcinos
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_porcinos.json",
    title: { antestitle: 'Producción de porcinos', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Var interanual", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Producción de porcinos" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Var interanual" },
    graficoTexto: "Var interanual",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_porcinos.json", //Producción de porcinos (%)

  { //// Faena de porcinos
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/faena_de_porcinos.json",
    title: { antestitle: 'Faena de porcinos', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Var interanual", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Faena de porcinos" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Var interanual" },
    graficoTexto: "Var interanual",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },


  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/faena_de_porcinos.json", //Faena de porcinos (%)
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
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  { //// Exportación de porcinos
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/exportaci%C3%B3n_de_porcinos.json",
    title: { antestitle: 'Exportación de porcinos', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Var interanual", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Exportación de porcinos" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Var interanual" },
    graficoTexto: "Var interanual",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/exportaci%C3%B3n_de_porcinos.json", //Exportación de porcinos (%)
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
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  { //// Producción de leche
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_leche.json",
    title: { antestitle: 'Producción de leche', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Var interanual", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Producción de leche" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Var interanual" },
    graficoTexto: "Var interanual",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_leche.json", //Producción de leche (%)
  { //$Girasol   
    link: "http://epichaco.tk/api/preciosAgroDiarios",
    title: { antestitle: '', campotitle: "precio", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: " $", campovalor: "valor_actual", despuesvalor: "" },
    variable: { dondebuscar: "precio", quebuscar: "Girasol" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "valor_actual" },
    graficoTexto: "Girasol",
    nacion: false,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },
  { //$Maíz                            => nacional
    link: "http://epichaco.tk/api/preciosAgroDiarios",
    title: { antestitle: '', campotitle: "precio", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: " $", campovalor: "valor_actual", despuesvalor: "" },
    variable: { dondebuscar: "precio", quebuscar: "Maíz" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "valor_actual" },
    graficoTexto: "Maíz",
    nacion: false,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },
  { //$Soja                            => nacional
    link: "http://epichaco.tk/api/preciosAgroDiarios",
    title: { antestitle: '', campotitle: "precio", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: " $", campovalor: "valor_actual", despuesvalor: "" },
    variable: { dondebuscar: "precio", quebuscar: "Soja" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "valor_actual" },
    graficoTexto: "Soja",
    nacion: false,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },
  { //$Trigo                           => nacional
    link: "http://epichaco.tk/api/preciosAgroDiarios",
    title: { antestitle: '', campotitle: "precio", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: " $", campovalor: "valor_actual", despuesvalor: "" },
    variable: { dondebuscar: "precio", quebuscar: "Trigo de Pan" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "valor_actual" },
    graficoTexto: "Trigo",
    nacion: false,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },
  { //Precio Fibra Algodón - Merc Int => nacional
    link: "http://epichaco.tk/api/preciosAgroMensuales",
    title: { antestitle: '', campotitle: "producto", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: " $", campovalor: "precio", despuesvalor: "" },
    variable: { dondebuscar: "producto", quebuscar: "Fibra de Algodón-Mercado Interno U$S| KG" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "precio" },
    graficoTexto: "C-1/2",
    nacion: false,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },
  { //Precio Sorgo                    => nacional
    link: "http://epichaco.tk/api/preciosAgroMensuales",
    title: { antestitle: '', campotitle: "producto", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: " $", campovalor: "precio", despuesvalor: "" },
    variable: { dondebuscar: "producto", quebuscar: "Sorgo U$S| Tonelada" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "precio" },
    graficoTexto: "precio",
    nacion: false,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },
  { //Precio arroz cascara            => nacional
    link: "http://epichaco.tk/api/preciosAgroMensuales",
    title: { antestitle: '', campotitle: "producto", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: " $", campovalor: "precio", despuesvalor: "" },
    variable: { dondebuscar: "producto", quebuscar: "Arroz U$S| Tonelada" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "fecha", ejey: "precio" },
    graficoTexto: "precio",
    nacion: false,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  { //// Molienda de soja - Granos oleaginosos
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/molienda_de_soja_-_granos_oleaginosos.json",
    title: { antestitle: 'Molienda de soja - Granos oleaginosos', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Var interanual", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Molienda de Soja - Granos Oleaginosos" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Var interanual" },
    graficoTexto: "Var interanual",
    nacion: true,
    arrow: {dirOpuesta: true, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/molienda_de_soja_-_granos_oleaginosos.json", //Molienda de soja - Granos oleaginosos (%)

  { //// Molienda de soja - Aceite
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/molienda_de_soja_-_aceite.json",
    title: { antestitle: 'Molienda de soja - Aceite', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Var interanual", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Molienda de Soja - Aceite" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Var interanual" },
    graficoTexto: "Var interanual",
    nacion: true,
    arrow: {dirOpuesta: true, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/molienda_de_soja_-_aceite.json", //Molienda de soja - Aceite (%)

  { //// Molienda de soja - harina
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/molienda_de_soja_-_harina.json",
    title: { antestitle: 'Molienda de soja - harina', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Var interanual", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Molienda de Soja - Harina" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Var interanual" },
    graficoTexto: "Var interanual",
    nacion: true,
    arrow: {dirOpuesta: true, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/molienda_de_soja_-_harina.json", //Molienda de soja - harina (%)

  { //// Producción de gas
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_gas.json",
    title: { antestitle: 'Producción de gas', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Variacion interanual", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Producción de gas (en miles de m3)" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Variacion interanual" },
    graficoTexto: "Variacion interanual",
    nacion: true,
    arrow: {dirOpuesta: true, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_gas.json", //Producción de gas (%)

  { //// Producción de petróleo
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_petr%C3%B3leo.json",
    title: { antestitle: 'Producción de petróleo', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Variacion interanual", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Producción de petróleo (m3)" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Variacion interanual" },
    graficoTexto: "Variacion interanual",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_petr%C3%B3leo.json", //Producción de petróleo (%)

  { //// Producción de acero crudo
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_acero_crudo.json",
    title: { antestitle: 'Producción de acero crudo', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Var interanual", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Producción de acero crudo en miles de toneladas" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Var interanual" },
    graficoTexto: "Var interanual",
    nacion: true,
    arrow: {dirOpuesta: true, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_acero_crudo.json", //Producción de acero crudo (%)

  { //// Producción de laminados no planos en caliente
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_laminados_no_planos_en_caliente.json",
    title: { antestitle: 'Producción de laminados no planos en caliente', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Var interanual", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Laminados no planos en caliente (en miles de toneladas)" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Var interanual" },
    graficoTexto: "Var interanual",
    nacion: true,
    arrow: {dirOpuesta: true, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_laminados_no_planos_en_caliente.json", //Producción de laminados no planos en caliente (%)

  { //// Producción de hierro
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_hierro_%28%25%29.json",
    title: { antestitle: 'Producción de hierro', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN INTERANUAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Var interanual", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Producción de hierro primario" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Var interanual" },
    graficoTexto: "Var interanual",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/producci%C3%B3n_de_hierro_%28%25%29.json", //Producción de hierro (%)


  { //// Canasta básica alimentaria
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/canasta_b%C3%A1sica_alimentaria.json",
    title: { antestitle: 'Canasta básica alimentaria', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: " $", campovalor: "Hogar 2", despuesvalor: "" },
    variable: { dondebuscar: "Canasta", quebuscar: "CBA" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Hogar 2" },
    graficoTexto: "Hogar 2",
    nacion: true,
    arrow: {dirOpuesta: null, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/canasta_b%C3%A1sica_alimentaria.json", //Canasta básica alimentaria

  { //// Canasta básica total
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/canasta_b%C3%A1sica_total.json",
    title: { antestitle: 'Canasta básica total', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: " $", campovalor: "Hogar 2", despuesvalor: "" },
    variable: { dondebuscar: "Canasta", quebuscar: "CBT" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Hogar 2" },
    graficoTexto: "Hogar 2",
    nacion: true,
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/canasta_b%C3%A1sica_total.json", //Canasta básica total

  { //// Pobreza
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/pobreza.json",
    title: { antestitle: 'Pobreza', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Indice", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Pobreza Persona" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Indice" },
    graficoTexto: "Indice",
    nacion: true,
    arrow: {dirOpuesta: null, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/pobreza.json", //pobreza
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
    arrow: {dirOpuesta: null, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  { //// Indigencia
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/indigencia.json",
    title: { antestitle: 'Indigencia', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VALOR SEMESTRAL AL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Indice", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Indigencia Persona" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Indice" },
    graficoTexto: "Indice",
    nacion: true,
    arrow: {dirOpuesta: null, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/indigencia.json", //Indigencia
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
    arrow: {dirOpuesta: false, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },

  { //// Índice de confianza del consumidor
    link: "https://especialess3.lanacion.com.ar/monitor-economia-real/data/%C3%ADndice_de_confianza_del_consumidor_%28icc%29.json",
    title: { antestitle: 'Índice de confianza del consumidor', campotitle: "", despuestitle: "" },
    subtitle: { antessubtitle: 'VARIACIÓN MENSUAL', camposubtitle: "", fechaSubtitle: true },
    valor: { antesvalor: "", campovalor: "Variacion mensual", despuesvalor: "%" },
    variable: { dondebuscar: "Tipo", quebuscar: "Nacional" },
    variableOpc: { dondebuscarOpc: "", quebuscarOpc: "" },
    grafico: { ejex: "Fecha", ejey: "Variacion mensual" },
    graficoTexto: "Variacion mensual",
    nacion: true,
    arrow: {dirOpuesta: true, varIntAnual: false},
    dateFormart: { subtitle: "DD/MM/YYYY", graph: "DD/MM/YYYY" },
    decimalPrecision: { maximumFractionDigits: 2, minimumFractionDigits: 2} 
  },
  //"https://especialess3.lanacion.com.ar/monitor-economia-real/data/%C3%ADndice_de_confianza_del_consumidor_%28icc%29.json", //Índice de confianza del consumidor (ICC)
];
