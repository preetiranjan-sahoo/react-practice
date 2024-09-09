const practice1 = () => {
  const students = [5];
  return (
    <>
      {/* <p>{students.length && "no student found"}</p> */}

      {/* <p>{students.length === 0 && "no student found"}</p> */}
      <p>{!students.length && "no student found"}</p>

      <p>no of students : {students.length}</p>
    </>
  );
};

export default practice1;
