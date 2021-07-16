
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import useStorageFavorites from './hooks/favorites.hook';
import { useGeolocation } from './hooks/geolocation.hook';
import useWeatherTheme from './hooks/weather-theme.hook';
import Favorites from './pages/Favorites/Favorites';
import Main from './pages/Main/Main';
import { selectError } from './redux/selectors';
import Layout from './containers/Layout';


function App() {

  useGeolocation();
  useStorageFavorites()
  useWeatherTheme(0)

  const error = useSelector(selectError);

  return (
    <Layout error={error}>
      <Switch>
        <Route path="/favorites" component={Favorites} />
        <Route exact path="/" component={Main} />
      </Switch>
    </Layout>
  );
}

export default App;
