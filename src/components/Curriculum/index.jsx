import React from 'react';
import { Container, Box, Typography, Link, List, ListItem, ListItemText, Divider } from '@mui/material';

const KassiaProfile = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, maxHeight: '80vh', }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Kassia Brandão
        </Typography>
        <Typography variant="body1" gutterBottom>
          <Link href="mailto:kassiambrandao@gmail.com">kassiambrandao@gmail.com</Link> | +55 51 993125499
        </Typography>
        <Typography variant="body1" gutterBottom>
          <Link href="https://github.com/KassiaBrandao" target="_blank" rel="noopener noreferrer">github.com/KassiaBrandao</Link>
        </Typography>
        <Typography variant="body1" gutterBottom>
          <Link href="https://linkedin.com/in/kassiabrandao" target="_blank" rel="noopener noreferrer">linkedin.com/in/kassiabrandao</Link>
        </Typography>
        <Typography variant="body1" gutterBottom>
          JavaScript, React.js, Typescript, Node.js, Java
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" gutterBottom>
          Experiência Profissional
        </Typography>
        
        <List>
          <ListItem>
            <ListItemText
              primary="Desenvolvedora Front-End | PrivacyTools | RS, Brasil Outubro 2023 - Atual"
              secondary={
                <>
                  <Typography variant="body2">
                    ● Otimização do Front-end: Implementação de melhorias no front-end da plataforma empresarial utilizando HTML5, CSS3 e JavaScript, empregando frameworks como React.js, Vue.js e Angular para aprimorar a interface do usuário e a eficiência da integração com APIs.
                  </Typography>
                  <Typography variant="body2">
                    ● Melhoria do UX/UI: Contribuição para a otimização da experiência do usuário (UX) através da aplicação de métodos como Design Thinking e User-Centered Design, garantindo uma navegação fluida e intuitiva, aliada a uma interface (UI) esteticamente atrativa.
                  </Typography>
                  <Typography variant="body2">
                    ● Integração com APIs: Desenvolvimento de ligações dinâmicas com serviços externos por meio de APIs RESTful, utilizando técnicas de comunicação assíncrona como AJAX e Promises para garantir uma interação eficiente e escalável entre sistemas.
                  </Typography>
                  <Typography variant="body2">
                    Tecnologia: React.js, HTML5, CSS3, Sass, JavaScript, Node, Java, Kotlin, Postgres, Docker, Git, CI/CD, GCP
                  </Typography>
                </>
              }
            />
          </ListItem>
          
          <ListItem>
            <ListItemText
              primary="Desenvolvedora Full Stack | Big Data Corp | RJ, Brasil Junho 2022 - Outubro 2023"
              secondary={
                <>
                  <Typography variant="body2">
                    ● Liderança Independente de Projetos: Encarregada de liderar de forma autônoma um projeto abrangente de desenvolvimento de uma aplicação de gestão de tarefas, utilizando metodologias ágeis como Scrum e Kanban para garantir a eficiência do processo de desenvolvimento.
                  </Typography>
                  <Typography variant="body2">
                    ● Desenvolvimento Full Stack: Responsável pela arquitetura e implementação tanto do front-end utilizando tecnologias como React.js e Vue.js, quanto do back-end com Node.js e Express.js, aplicando princípios de design de software sólidos para garantir a escalabilidade e a robustez do sistema.
                  </Typography>
                  <Typography variant="body2">
                    ● Gestão de Banco de Dados: Configuração e administração da base de dados da aplicação, utilizando tecnologias como MySQL, PostgreSQL ou MongoDB, implementando técnicas de otimização de consultas e normalização de dados para garantir o desempenho e a integridade do sistema de armazenamento de informações.
                  </Typography>
                  <Typography variant="body2">
                    Tecnologia: React.js, HTML5, CSS3, Sass, JavaScript, Node, Vue.js, Angular, Java, Python, Postgres, Docker, Git, CI/CD, GCP, AWS
                  </Typography>
                </>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="QA | M3Corp | São Paulo, SP, Brasil 2022"
              secondary={
                <>
                  <Typography variant="body2">
                    ● Testadora de Software: Experiência diversificada em métodos de teste, incluindo testes unitários, testes de regressão, testes de usabilidade, testes de integração e automatização de testes.
                  </Typography>
                  <Typography variant="body2">
                    ● Garantia de Desempenho e Compromisso: Assegurei o alto desempenho e a confiabilidade dos sistemas dos clientes por meio de testes abrangentes e meticulosos.
                  </Typography>
                </>
              }
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" gutterBottom>
          Experiência Acadêmica
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Engenharia de Software | Anhanguera 2023 - Em andamento"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Técnico em Análise e Desenvolvimento de Sistemas | SENAC RS 2021 - 2022"
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" gutterBottom>
          Línguas
        </Typography>
        <Typography variant="body1" gutterBottom>
          Português - Nativo | Inglês - Intermediário | Francês - Básico
        </Typography>
      </Box>
    </Container>
  );
}

export default KassiaProfile;
