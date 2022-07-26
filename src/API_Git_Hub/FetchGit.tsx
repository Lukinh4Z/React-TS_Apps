import { Button, Card, CardActions, CardHeader, TextField } from "@mui/material";
import { Container as div, Container } from '@mui/system';
import { AnyArray } from "immer/dist/internal";
import React, { useState } from "react";

export const FetchGit: React.FC = () => {
  const [user, setUser] = useState<string>('')
  const [name, setName] = useState<string | null>('')
  const [error, setError] = useState<string | null>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [repos, setRepos] = useState<AnyArray | null>(null)


  async function fetchRepos() {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${user}/repos`);
      const json = await response.json();
      setRepos(json);
      setName(user)
    }
    catch (errorMSG) {
      setError("Erro");
      console.log(errorMSG);
      console.log(error);
      setRepos(null);
      setName(null)
    } finally {
      setLoading(false)
    }
  }


  return (
    <Container sx={{ alignItems: 'center', textAlign: "center", display: "flex", flexDirection: "column", alignContent: "center" }}>
      <h2>Search Git Repository</h2>
      <Card>
        <form style={{ alignItems: "center", margin: "1rem", padding: "1rem", width: "200px" }} onSubmit={(e) => {
          e.preventDefault();
          fetchRepos()
        }}>
          <TextField id="filled-basic" label="Username" variant="filled" value={user} onChange={(e) => setUser(e.target.value)} placeholder="Input an username..."></TextField>
          <p></p>
          <Button variant="contained">Search</Button>
        </form>
      </Card>
      {loading && <h4>Loading, please wait...</h4>}
      {!loading && name && <h4>See profile: <a href={`https://github.com/${name}`}>{name}</a></h4>}
      <Container sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {repos && repos.map(repo => (
          <Card key={repo.name} sx={{ textAlign: "left", margin: "1rem", padding: "1.5rem" }}>
            Name: {repo.name}<br />
            Forks: {repo.forks}<br />
            Language: {repo.language}<br />
            <CardActions sx={{ alignContent: "center", textAlign: "center" }}><Button href={repo.html_url} size="small">Link</Button></CardActions></Card>
        ))}
      </Container>
    </Container>
  );
};
