import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import requests from '../utils/requests';


export default function Home({ results }) {
  console.log('results', results)
  return (
    <div>
      <Head>
        <title>Welcome to Huluu</title>
      </Head>
      
      <Header/>

      <Nav />
      
      <Results  results={results} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const response = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url ||
    requests.fetchTrending.url}`)

  const resp = await response.json();
  return {
    props: {
        results: resp.results
      }
    }
}