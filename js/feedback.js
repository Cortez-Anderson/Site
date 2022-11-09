var contagem = 0;
frases = ['Tive a feliz surpresa de conhecer seus talentos, sua dedicação e sua força através dos legados de seus projetos e de sua boa fama pela instituição CEFET/RJ. Seu brilhantismo e sua capacidade de solucionar os problemas são suas principais armas, além de sua cortesia e simpatia inigualável',
'Por mais difícil que seja, bravamente batalha para conquistas seus objetivos em prol dos outros, portando, guardem bem este nome: Anderson Cortez Calderini! Uma grande pessoa que eu tive o grandioso prazer em ter como magnífico amigo! Inteligentíssimo e muito dedicado em tudo que faz',
'Anderson Cortez é alguém que faz o que precisa ser feito, independentemente do quão difícil seja, quando ele foca em alguma coisa, realiza com uma proatividade e energia que infestam o ambiente. Além disso, é uma pessoa com ideais e princípios extremamente fortes, que nunca desiste e está sempre avançando: Tatakae Cortez!',
'O Anderson é uma pessoa de luz, de espírito iluminado e uma mente brilhante. Humildade é uma de suas várias qualidades, porque se tratando de relações interpessoais, ele demonstra o quão incrível é a sua alma. Relacionar-se com o Anderson é se propiciar a diálogos orgânicos e conexões íntegras.',
'Tem poucos anos que conheço o Anderson, tive o prazer de conhecer esse garoto tão incrível de forma tão aleatória, presenciei ele superar um por um dos seus desafios, nunca deixando de amar o ramo que trabalha hoje, sempre estudou e tentou ser melhor independente das dificuldades e sempre demonstrou o amor pelo estudo, é admirável ver uma pessoa com coragem para fazer o que ama e por tanto esforço nisso.',
'Pessoa excepcional, exemplo de cidadão e, principalmente, de amigo. Sempre muito determinado e empenhado com suas metas e projetos, ele leva consigo o verdadeiro espírito da ciência. Um cara ético, e acima de tudo, companheiro. Sou muito grato por tê-lo em minha vida.']

datas = ['Vitor Pereira',
'Ma Yu Hong',
'Miguel Grijó',
'Liz França',
'Maria Moraes',
'João Lino']

titulos = ['Medalhista da SEPEX 2022', 'Informática no CEFET/RJ', 'Diretor de produção da PhysCore', 'Terapeuta Ocupacional', 'Aluna do IFG', 'Companheiro de sala']

function trocar() {
	if(contagem == frases.length) {
	contagem = 1;
	}
	else {
	contagem = contagem + 1;
    }
	document.getElementById("feedback").innerHTML = frases[contagem - 1];
	document.getElementById("autor").innerHTML = datas[contagem - 1];
	document.getElementById("titulo").innerHTML = titulos[contagem - 1];
}