function calcular() {

    /*Calculo segunda*/////////////////

    var totalseg = document.getElementById ('total.segunda')

    var segunda9h = document.getElementById ('box.seg9h')
    var segunda11h = document.getElementById ('box.seg11h')
    var segunda14h = document.getElementById ('box.seg14h')
    var segunda16h = document.getElementById ('box.seg16h')
    var segunda18h = document.getElementById ('box.seg18h')

    var seg9h = Number(segunda9h.value)
    var seg11h = Number(segunda11h.value)
    var seg14h = Number(segunda14h.value)
    var seg16h = Number(segunda16h.value)
    var seg18h = Number(segunda18h.value)

    contagemseg = seg9h + seg11h + seg14h + seg16h +  seg18h

    totalseg.innerHTML = `Total do dia:<strong>${contagemseg}</strong>`

    /*Calculo terça*////////////////////

    var totalter = document.getElementById ('total.terça')

    var terça9h = document.getElementById ('box.ter9h')
    var terça11h = document.getElementById ('box.ter11h')
    var terça14h = document.getElementById ('box.ter14h')
    var terça16h = document.getElementById ('box.ter16h')
    var terça18h = document.getElementById ('box.ter18h')

    var ter9h = Number(terça9h.value)
    var ter11h = Number(terça11h.value)
    var ter14h = Number(terça14h.value)
    var ter16h = Number(terça16h.value)
    var ter18h = Number(terça18h.value)

    contagemter = ter9h + ter11h + ter14h + ter16h + ter18h

    totalter.innerHTML = `Total do dia:<strong>${contagemter}</strong>`

    /*Calculo quarta*/////////////////

    var totalqua = document.getElementById ('total.quarta')

    var quarta9h = document.getElementById ('box.qua9h')
    var quarta11h = document.getElementById ('box.qua11h')
    var quarta14h = document.getElementById ('box.qua14h')
    var quarta16h = document.getElementById ('box.qua16h')
    var quarta18h = document.getElementById ('box.qua18h')

    var qua9h = Number(quarta9h.value)
    var qua11h = Number(quarta11h.value)
    var qua14h = Number(quarta14h.value)
    var qua16h = Number(quarta16h.value)
    var qua18h = Number(quarta18h.value)

    contagemqua = qua9h + qua11h + qua14h + qua16h + qua18h

    totalqua.innerHTML = `Total do dia:<strong>${contagemqua}</strong>`

    /*Calculo quinta*/////////////////

    var totalqui = document.getElementById ('total.quinta')

    var quinta9h = document.getElementById ('box.qui9h')
    var quinta11h = document.getElementById ('box.qui11h')
    var quinta14h = document.getElementById ('box.qui14h')
    var quinta16h = document.getElementById ('box.qui16h')
    var quinta18h = document.getElementById ('box.qui18h')

    var qui9h = Number(quinta9h.value)
    var qui11h = Number(quinta11h.value)
    var qui14h = Number(quinta14h.value)
    var qui16h = Number(quinta16h.value)
    var qui18h = Number(quinta18h.value)

    contagemqui = qui9h + qui11h + qui14h + qui16h + qui18h

    totalqui.innerHTML = `Total do dia:<strong>${contagemqui}</strong>`

    /*Calculo sexta*//////////////////

    var totalsex = document.getElementById ('total.sexta')

    var sexta9h = document.getElementById ('box.sex9h')
    var sexta11h = document.getElementById ('box.sex11h')
    var sexta14h = document.getElementById ('box.sex14h')
    var sexta16h = document.getElementById ('box.sex16h')
    var sexta18h = document.getElementById ('box.sex18h')

    var sex9h = Number(sexta9h.value)
    var sex11h = Number(sexta11h.value)
    var sex14h = Number(sexta14h.value)
    var sex16h = Number(sexta16h.value)
    var sex18h = Number(sexta18h.value)

    contagemsex = sex9h + sex11h + sex14h + sex16h + sex18h

    totalsex.innerHTML = `Total do dia:<strong>${contagemsex}</strong>`

    /*calculo sábado*//////////////////

    var totalsab = document.getElementById ('total.sabado')

    var sabado9h = document.getElementById ('box.sab9h')
    var sabado11h = document.getElementById ('box.sab11h')
    var sabado14h = document.getElementById ('box.sab14h')
    var sabado16h = document.getElementById ('box.sab16h')
    var sabado18h = document.getElementById ('box.sab18h')

    var sab9h = Number(sabado9h.value)
    var sab11h = Number(sabado11h.value)
    var sab14h = Number(sabado14h.value)
    var sab16h = Number(sabado16h.value)
    var sab18h = Number(sabado18h.value)

    contagemsab = sab9h + sab11h + sab14h + sab16h + sab18h

    totalsab.innerHTML = `Total do dia:<strong>${contagemsab}</strong>`

    /*Total da semana*/////////////////

    var totalsemana = document.getElementById ('total.semana')

    var contagemsemana = Number.parseInt(contagemseg + contagemter + contagemqua + contagemqui + contagemsex + contagemsab)

    totalsemana.innerHTML = `Total da semana: <strong>${contagemsemana}</strong>`

    /* Calculo 27% *////////////////

    var comissao27 = document.getElementById ('comissao.27')

    var calculo27 = Number.parseInt(contagemsemana / 100 * 27)

    comissao27.innerHTML = `Comissão em 27%:<strong>${calculo27}</strong>`

    /* Calculo 20%*///////////////

    var comissao20 = document.getElementById ('comissao.20')

    var calculo20 = Number.parseInt(contagemsemana / 100 * 20)

    comissao20.innerHTML = `Comissão em 20%:<strong>${calculo20}</strong>`

    /* Calculo 10% *///////////////

    var comissao10 = document.getElementById ('comissao.10')

    var calculo10 = Number.parseInt(contagemsemana / 100 * 10)

    comissao10.innerHTML = `Comissão em 10%:<strong>${calculo10}</strong>`

}