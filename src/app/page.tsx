import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <header className="flex flex-col justify-between h-screen text-center">
        <header className="h-8 bg-secondary">
          <span className="text-white">NEED HELP?</span>{" "}
          <span className="text-primary">me@bytefemme.com</span>
        </header>
        <section className="flex flex-col h-full">
          <section className="flex flex-row h-16 w-full border-b border-black font-bold">
            <div className="flex-1 flex justify-center items-center text-3xl">
              <span className="text-secondary">BYTE</span>
              <span className="text-primary">FEMME</span>
            </div>
            <div className="flex-1 flex justify-center items-center gap-5">
              <p className="text-primary">HOME</p>
              <p>PROJECTS</p>
              <p>ABOUT</p>
              <p>CONTACT</p>
            </div>
            <div className="flex-1 flex justify-center items-center gap-5">
              <svg
                fill="none"
                height="36"
                viewBox="0 0 37 36"
                width="37"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m18.5 0c-10.24365 0-18.5 8.21021-18.5 18.2766 0 8.4958 5.90771 15.6887 13.875 17.7234v-3.6767c-5.81738-1.7313-7.37109-6.0863-7.44336-6.2648-.0542-.2142.03613-.4641.25293-.589.1626-.1249.41553-.0892.59619.0892.03613 0 3.16164 3.0343 7.02784 2.9629.2891-.7675.7588-1.535 1.4995-2.0883-4.9683-.7496-8.8706-3.6232-8.8706-8.1567 0-1.8562.77686-3.7302 2.1499-5.2473-.43359-1.7313-.61426-3.85528.1626-5.40808 1.9692.16063 3.9023 1.14229 5.3477 2.01686 1.2104-.28558 2.4931-.49976 3.9023-.49976s2.6919.21418 3.9023.49976c1.4454-.87457 3.3785-1.85623 5.3477-2.01686.7769 1.5528.5601 3.67678.1626 5.40808 1.373 1.5171 2.1499 3.3911 2.1499 5.2473 0 4.5335-3.9023 7.4071-8.8706 8.1567 1.5537 1.1959 1.9331 3.3019 1.9331 4.7834v4.7833c7.9673-2.0347 13.875-9.2276 13.875-17.7234 0-10.06639-8.3105-18.2766-18.5-18.2766z"
                  fill="#dd2350"
                ></path>
              </svg>

              <svg height="36" viewBox="0 0 24 24" width="36">
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  fill="#dd2350"
                ></path>
              </svg>

              <svg
                height="36"
                viewBox="0 0 72 72"
                width="36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
                  fill="#dd2350"
                />
                <path
                  d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                  fill="#FFF"
                />
              </svg>
            </div>
          </section>
          <section className="relative flex w-full h-full">
            <section className="absolute top-0 bottom-0 left-2/4 right-0 h-full">
              <Image
                src="/person.png"
                alt="Bytefemme"
                fill
                objectFit="contain"
                objectPosition="bottom left"
              />
            </section>
            <section className="absolute flex flex-col gap-6 top-14 right-2/4 text-left w-[450px]">
              <h1 className="text-6xl font-bold text-secondary">
                TURNING <span className="outlined text-4xl">DATA</span> <br />{" "}
                INTO CURES
              </h1>
              <p className="border-l-4 w-2/3 border-black pl-5">
                Hi, I’m Nath, a data scientist with a passion for drug
                discovery.
              </p>
              <div className="relative h-[64px]">
                <div className="absolute">
                  <svg
                    width="256"
                    height="64"
                    viewBox="0 0 257 65"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon
                      points="1,1 256,1 256,64 19,64 1,45"
                      fill="none"
                      stroke="#dd2350"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
                <div className="absolute top-[7px] left-[8px]">
                  <svg
                    width="240"
                    height="50"
                    viewBox="0 0 240 50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon
                      points="0,0 240,0 240,50 16,50 0,34"
                      fill="#dd2350"
                    />
                    <polygon
                      points="230,0 240,0 240,10"
                      fill="#ffffff"
                      stroke="#dd2350"
                      strokeWidth="2"
                    />
                    <polygon
                      points="190,30 200,20"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                    <polyline
                      points="190,20 200,20 200,30"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                  </svg>
                  <p className="absolute top-[13px] left-[40px] text-white font-bold">
                    GO TO PROJECTS
                  </p>
                </div>
              </div>
              <section className="relative bg-white border-1 border-gray-300 w-[320px] h-[200px] mt-5">
                <div className="absolute w-[100px] h-[100px] bg-primary top-[50px]"></div>
                <Image
                  className="absolute"
                  src="/test-tubes.png"
                  alt="Bytefemme"
                  width={250}
                  height={250}
                  objectFit="contain"
                />
                <div className="absolute flex flex-col gap-1 w-[150px] h-[100px] top-4 right-4">
                  <div className="bg-gray-200 h-1"></div>
                  <div className="bg-gray-200 h-1"></div>
                  <div className="bg-gray-200 h-1"></div>
                  <div className="bg-gray-200 h-1"></div>
                  <div className="bg-gray-200 h-1"></div>
                  <div className="bg-gray-200 h-1"></div>
                  <div className="bg-gray-200 h-1"></div>
                  <div className="bg-gray-200 h-1"></div>
                  <div className="bg-gray-200 h-1"></div>
                  <div className="bg-gray-200 h-1"></div>
                  <div className="bg-gray-200 h-1"></div>
                  <div className="bg-gray-200 h-1"></div>
                </div>
                <div className="absolute top-[-50px]">
                  <svg
                    width="350"
                    height="300"
                    viewBox="0 0 350 300"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline
                      points="150,50 170,30 340,30 340,100 319,100"
                      fill="none"
                      stroke="#D1D5DB"
                      strokeWidth="1"
                    />
                    <polyline
                      points="319,150 330,150 340,160 340,180 330,190 330,230 319,240"
                      fill="none"
                      stroke="#D1D5DB"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              </section>
            </section>
          </section>
        </section>
        <footer className="flex flex-row justify-center items-center h-16 gap-5 text-white font-bold text-lg overflow-hidden bg-primary">
          <p>WELCOME</p>
          <p>+</p>
          <p>WELCOME</p>
          <p>+</p>
          <p>WELCOME</p>
          <p>+</p>
          <p>WELCOME</p>
          <p>+</p>
          <p>WELCOME</p>
          <p>+</p>
          <p>WELCOME</p>
          <p>+</p>
          <p>WELCOME</p>
          <p>+</p>
          <p>WELCOME</p>
          <p>+</p>
          <p>WELCOME</p>
          <p>+</p>
          <p>WELCOME</p>
          <p>+</p>
          <p>WELCOME</p>
          <p>+</p>
          <p>WELCOME</p>
          <p>+</p>
          <p>WELCOME</p>
          <p>+</p>
          <p>WELCOME</p>
          <p>+</p>
        </footer>
      </header>
    </div>
  );
}
