import "./style.css";
import ModalProduto from "../ModalProduto";

export default function CardProduto({
    id,
    nome,
    descricao,
    imagem,
    precoProduto,
    setMensagemSucesso,
    setErro
}) {

  return (
    <div className="container-card" >
      <div className="conteudo-card">
        <ModalProduto id={id} nome={nome} descricao={descricao} imagem={imagem} preco={precoProduto} setMensagemSucesso={setMensagemSucesso} setErro={setErro}/>
        <div className="informacao-card">
          <h3>{nome}</h3>
          <p>{descricao}</p>
          <span>
          {Number(precoProduto / 100).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
        {imagem ? <img src={imagem} alt="imagem produto"/> : ""}
      </div>
    </div>
  );
}
