import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import Head from "next/head";

interface CarProps {
  car: any;
}

const Car: FunctionComponent<CarProps> = ({ car }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Head>
        <title>{`${car.id} ${car.color}`}</title>
      </Head>
      <div>{id}</div>
      <div>color:{car.color}</div>
    </div>
  );
};

export default Car;

// export async function getStaticProps({ params }: any) {
//   const request = await fetch(`http://localhost:3000/${params.id}.json`);
//   const data = await request.json();

//   return {
//     props: {
//       car: data,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const request = await fetch(`http://localhost:3000/cars.json`);
//   const data = await request.json();

//   const paths = data.map((car: any) => {
//     return {
//       params: {
//         id: car,
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getServerSideProps({ params }: any) {
  const request = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await request.json();

  return {
    props: {
      car: data,
    },
  };
}
