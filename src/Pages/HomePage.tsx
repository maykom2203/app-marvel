
const HomePage = () => {
return(
    <div>
        <form>
          <label htmlFor="search-artist-input">
            <input
              type="text"
              data-testid="search-artist-input"
              // onChange="{ this.searchChange "
              value="{ inputArtista }"
            />
          </label>

          <button
            type="submit"
            data-testid="search-artist-button"
            // disabled={ buttonHabilit }
            // onClick={ this.buttonPesquisar }

          >
            Pesquisar

          </button>
        </form>
    </div>
)
}

export default HomePage;