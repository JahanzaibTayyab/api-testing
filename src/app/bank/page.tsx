const apiCalling = async () => {
  const res = await fetch("http://localhost:3002/api/quizbank/3");
  const formateRes = await res.json();
  return formateRes;
};

const Bank = async () => {
  const res = await apiCalling();
  console.log("🚀 ~ file: page.tsx:9 ~ Bank ~ res:", res);
  return <div>Bank</div>;
};
export default Bank;
