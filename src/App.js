import React, { Fragment, Component } from 'react';
import { Container, Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import { Contact, PostListView, About } from './components/Home';
import { Route, Switch, Link } from 'react-router-dom';

const Button = styled.a`
  border-radius: 1px;
  margin: 0.5rem 1rem;
  width: 5rem;
  background: transparent;
  border: 1px solid white;
`;
const Styles = styled.div`
    .div-all{
        position: relative;
    }

`;
const StylesFoo = styled.footer`
    .con-color {
        background-color: black;
        position:relative;
        bottom: 0;
        width: 100%;
    }

`;

const StylesJum = styled.div`
    .jumbo {
        background: url(https://amazingpict.com/wp-content/uploads/2014/05/Free-Backgrounds-Future-City.jpg) no-repeat;
        background-color: #0472ff91;
        color: #fff;
        height: 200px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }

    .tit {
        font-size: 63px;
    }
`;


class App extends Component {
  render() {
    return (
      <Fragment>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary lg">
              <a className="navbar-brand" href="/FirstBlogs">Japones Básico</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarColor01">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                          <Link className="nav-link btn btn-outline-success" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link btn btn-outline-info" to="/contact">Contact</Link>
                      </li>
                  </ul>

              </div>
          </nav>

        <StylesJum>
          <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
              <h1 className="tit">Bienvenido</h1>
              <p>Este es mi primer blog creado con ReactJs todavia esta en preparacion</p>
            </Container>
          </Jumbo>
        </StylesJum>

        <Styles>
            <main role="main" className="container">
                <div className="row">
                    <div className="col-md-8 blog-main">
                            <Layout>
                              <Switch>
                                <Route exact path="/" component={PostListView} />
                                <Route path="/contact" component={Contact} />
                              </Switch>
                            </Layout>
                    </div>
                    <aside className="col-md-4 blog-sidebar">
                        <div className="p-4 mb-3 bg-light rounded">
                            <About />
                        </div>

                    </aside>
                </div>
            </main>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Styles>

        <StylesFoo>
          <footer className="footer mt-auto py-3 con-color">
            <div className="container">
              <span className="text-muted">Pagina con licencia CC</span>
              <span><div>Iconos diseñados por <a href="https://www.flaticon.es/autores/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div></span>
              <span><div>Iconos diseñados por <a href="https://www.flaticon.es/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div></span>
            </div>
          </footer>
        </StylesFoo>
      </Fragment>

    );
  }

}

const Layout = (props) => (
  <Container>
    {props.children}
  </Container>
)

export default App;
