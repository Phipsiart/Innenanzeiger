import Image from 'next/image';
export default function AvailableTypesofConnections({ products, mainscreen }) {
  return (
    <>
      {mainscreen ? (
        <div
          className="flex fixed mt-8 left-2  justify-end"
          key={Math.floor(Math.random() * 0xffffff)
            .toString(16)
            .padEnd(6, '0')}
        >
          {products.bus ? (
            <Image
              src="/transportation-types/Bus.svg"
              className=""
              height={36}
              width={36}
              alt="Bus Logo (illustrational)"
            ></Image>
          ) : (
            ''
          )}
          {products.tram ? (
            <Image
              className="ml-2"
              src="/transportation-types/STR.svg"
              height={36}
              width={36}
              alt="Tram Logo (illustrational)"
            ></Image>
          ) : (
            ''
          )}
          {products.suburban ? (
            <Image
              className="ml-2"
              src="/transportation-types/S.svg"
              height={36}
              width={36}
              alt="S Logo (illustrational)"
            ></Image>
          ) : (
            ''
          )}
          {products.regional ? (
            <Image
              className="ml-2"
              src="/transportation-types/R.svg"
              height={36}
              width={36}
              alt="R Logo (illustrational)"
            ></Image>
          ) : (
            ''
          )}
        </div>
      ) : (
        <div
          className="flex"
          key={Math.floor(Math.random() * 0xffffff)
            .toString(16)
            .padEnd(6, '0')}
        >
          {products.bus ? (
            <Image
              src="/transportation-types/Bus.svg"
              className=""
              height={36}
              width={36}
              alt="Bus Logo (illustrational)"
            ></Image>
          ) : (
            ''
          )}
          {products.tram ? (
            <Image
              className="ml-2"
              src="/transportation-types/STR.svg"
              height={36}
              width={36}
              alt="Tram Logo (illustrational)"
            ></Image>
          ) : (
            ''
          )}
          {products.suburban ? (
            <Image
              className="ml-2"
              src="/transportation-types/S.svg"
              height={36}
              width={36}
              alt="S Logo (illustrational)"
            ></Image>
          ) : (
            ''
          )}
          {products.regional ? (
            <Image
              className="ml-2"
              src="/transportation-types/R.svg"
              height={36}
              width={36}
              alt="R Logo (illustrational)"
            ></Image>
          ) : (
            ''
          )}
        </div>
      )}
    </>
  );
}
