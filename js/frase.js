var index = 0;
frases = ['"Se para construir uma opinião, você usa seus olhos, e não sua mente, você passará o resto da vida mordendo anzóis enquanto olha para as iscas."', 
'"Um problema grande e duradouro nunca é imediatamente sucedido por uma solução, e sim por um problema quase tão grande e tão duradouro quanto o anterior, porém em sentido contrário. Pois aqueles que sofreram com o problema inicial se tornam cegos por vingança, então passam de oprimidos para opressores, que por sua vez justificam sua opressão como uma forma de lutar contra a opressão."', 
'"A vida não dá nada ao homem, apenas tira. A vida não nos dá humildade, força e sabedoria. A vida apenas nos tira o ego, a fraqueza e a ignorância. A vida nos tira partes desnecessárias de nós por meio de acontecimentos ruins. Pois a cada martelada que a vida nos dá, a rocha que nós somos começa a quebrar e perder partes, até se tornar uma linda escultura."',
'"Para o desenvolvimento de uma boa solução, é necessário primeiramente o diálogo, para que assim seja criada uma conversa inteligente. Mas enquanto este diálogo ainda for limitado por gritos, censura, prisão, ou qualquer tipo de opressão, nunca teremos uma conversa inteligente e produtiva, portando nunca teremos uma solução eficaz"',
'"Mesmo que o mundo te humilhe ou se aproveite de você por causa de sua honestidade, continue sendo justo, fiel e honesto. Pois quanto mais árduo for seu caminho no mundo dos humanos, mais fácil será no mundo espiritual"']
datas = ['2020',
'26 de Julho de 2021',
'11 de Junho de 2020',
'2020',
'2020']
function trocar() {
	if(index == frases.length) {
	index = 1;
	}
	else {
	index = index + 1;
    }
	document.getElementById("frase").innerHTML = frases[index - 1];
	document.getElementById("data").innerHTML = datas[index - 1];
}