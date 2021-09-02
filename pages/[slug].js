function Blog({ data }) {
  console.log(data);
  return (
    <div>
      {data !== undefined && "results" in data ? `${data.results[0].email}`: `No data`}
    </div>
  );
}

export async function getStaticProps({ params }) {
  let data = {};
  if (params.slug === "nodata") {
    return {
      notFound: true,
    };
  } else if (params.slug === "randomuser") {
    const res = await fetch(`https://randomuser.me/api/`);
    data = await res.json()
    return {
      props: { data }, // will be passed to the page component as props
    };
  }
  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "randomuser" } }, { params: { slug: "nodata" } }],
    fallback: "blocking",
  };
}

export default Blog;
