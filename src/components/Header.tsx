export function Header(props) {
    return (
      <header>
        <span className="category">Categoria:<span> {props.genre.title}</span></span>
      </header>
    )
  }