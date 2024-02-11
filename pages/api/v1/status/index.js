function status(request, response) {
  response
    .status(200)
    .json({ chave: "alunos do curso.dev são pessoas acima da média" });
  // send() nao define o charset (utf8)
  // o json retorna utf8
}

// usa curl
// curl http://localhost:3000/api/status --verbose

export default status;
