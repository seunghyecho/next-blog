import List from "../../components/list";

export default function Home() {
  return (
    <>
      <h2 style={{ borderBottom: "1px solid #efefef", padding: "30px 0" }}>
        <b>
          전체 글 <span>22</span>
        </b>
      </h2>
      <ul>
        {LISTSAMPLE.map((item) => (
          <li key={item.id}>
            <List
              id={item.id}
              title={item.title}
              body={item.body}
              category={item.category}
              created_at={item.created_at}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

const LISTSAMPLE = [
  {
    id: 1,
    title: "Ditch the dreaded",
    body: "Ditch the dreaded. Semantic HTML elements we should use instead Ditch the dreaded. Semantic HTML elements we should use instead Ditch the dreaded <div />. Semantic HTML elements we should use instead Ditch the dreaded <div />. Semantic HTML elements we should use instead Semantic HTML elements we should use instead Ditch the dreaded <div />. Semantic HTML elements we should use instead Ditch the dreaded <div />. Semantic HTML elements we should use instead",
    category: "life",
    created_at: "2022.06.04",
  },
  {
    id: 2,
    title: "Ditch the dreaded",
    body: "Ditch the drea. Semantic HTML elements we should use instead",
    category: "life",
    created_at: "2022.06.04",
  },
];