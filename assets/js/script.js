document.write("<h1>Estadísticas centro médico ñuñoa</h1>"),

radiologia = [
  {hora: "11.00", Especialista : "IGNACIO SCHULZ", Paciente: "FRANCISCA ROJAS", Rut: "9878782-1", Prevision: "FONASA"},
  {hora: "11.30", Especialista : "FEDERICO SUBERCASEAUX", Paciente: "PAMELA ESTRADA", Rut: "15345241-3", Prevision: "ISAPRE"},
  {hora: "15.00", Especialista : "FERNANDO WURTHZ", Paciente: "ARMANDO LUNA", Rut: "16445345-9", Prevision: "ISAPRE"},
  {hora: "15.30", Especialista : "ANA MARIA GODOY", Paciente: "MANUEL GODOY", Rut: "17666419-0", Prevision: "FONASA"},
  {hora: "16.00", Especialista : "PATRICIA SUAZO", Paciente: "RAMON ULLOA", Rut: "14989389-K", Prevision: "FONASA"}
]
document.write("<h3> Cantidad de atenciones para Radiología: " + radiologia.length + "</h3>"),
document.write("<p> Primera antención: " + radiologia[0].Rut + " - " + radiologia[0].Prevision + " | Última atención: " + radiologia[radiologia.length-1].Rut + " - " + radiologia[radiologia.length-1].Prevision + "</p>"),

traumatologia = [
  {hora: "08:00", Especialista : "MARIA PAZ ALTUZARRA", Paciente: "PAULA SANCHEZ", Rut: "15554774-5", Prevision: "FONASA"},
  {hora: "10.00", Especialista : "RAUL ARAYA", Paciente: "ANGÉLICA NAVAS", Rut: "15444147-9", Prevision: "ISAPRE"},
  {hora: "10.30", Especialista : "MARIA ARRIAGADA", Paciente: "ANA KLAPP", Rut: "17879423-9", Prevision: "ISAPRE"},
  {hora: "11.00", Especialista : "ALEJANDRO BADILLA", Paciente: "FELIPE MARDONES", Rut: "1547423-6", Prevision: "ISAPRE"},
  {hora: "11.30", Especialista : "CECILIA BUDNIK", Paciente: "DIEGO MARRE", Rut: "16554741-K", Prevision: "FONASA"},
  {hora: "12.00", Especialista : "ARTURO CAVAGNARO", Paciente: "CECILIA MENDEZ", Rut: "9747535-8", Prevision: "ISAPRE"},
  {hora: "12.30", Especialista : "ANDRES KANACRI", Paciente: "MARCIAL SUAZO", Rut: "11254785-5", Prevision: "ISAPRE"}
]
document.write("<h3> Cantidad de atenciones para Traumatología: " + traumatologia.length + "</h3>"),
document.write("<p> Primera antención: " + traumatologia[0].Rut + " - " + traumatologia[0].Prevision + " | Última atención: " + traumatologia[traumatologia.length-1].Rut + " - " + traumatologia[traumatologia.length-1].Prevision + "</p>"),

dental = [
  {hora: "08.30", Especialista : "ANDREA ZUÑIGA", Paciente: "MARCELA RETAMAL", Rut: "11123425-6", Prevision: "ISAPRE"},
  {hora: "11.00", Especialista : "MARIA PIA ZAÑARTU", Paciente: "ANGEL MUÑOZ", Rut: "9878789-2", Prevision: "ISAPRE"},
  {hora: "11.30", Especialista : "SCARLETT WITTING", Paciente: "MARIO KAST", Rut: "7998789-5", Prevision: "FONASA"},
  {hora: "13.00", Especialista : "FRANCISCO VON TEUBER", Paciente: "KARIN FERNANDEZ", Rut: "18887662-K", Prevision: "FONASA"},
  {hora: "13.30", Especialista : "EDUARDO VIÑUELA", Paciente: "HUGO SANCHEZ", Rut: "17665461-4", Prevision: "FONASA"},
  {hora: "14.00", Especialista : "RAQUEL VILLASECA", Paciente: "ANA SEPULVEDA", Rut: "14441281-0", Prevision: "ISAPRE"}
]

document.write("<h3> Cantidad de atenciones para Dental: " + dental.length + "</h3>")
document.write("<p> Primera antención: " + dental[0].Rut + " - " + dental[0].Prevision + " | Última atención: " + dental[dental.length-1].Rut + " - " + dental[dental.length-1].Prevision + "</p>")
