import Image from "next/image";
import { MapPin, Briefcase, Clock } from "lucide-react"; // assuming lucide-react icons

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Chair Location
            </h2>
            <p className="text-gray-400 mb-8">
              "Chair location" is a website where you can search, find and
              reserve co-working space, including co-working offices, private
              offices, meeting rooms, and virtual offices near you. It shows the
              features and amenities this space can provide. Professionals and
              businesses can then compare all available co-working spaces to
              find one with the services and facilities that best suit their
              requirements.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Why Chair Location
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-[#E7CAAA] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.0067 15.8571C18.5606 11.8496 18.2395 12.3496 18.3131 12.2451C19.2429 10.9336 19.7344 9.39009 19.7344 7.78125C19.7344 3.51469 16.2721 0 12 0C7.74178 0 4.26562 3.50775 4.26562 7.78125C4.26562 9.38906 4.76737 10.973 5.72766 12.3022L7.99322 15.8572C5.57095 16.2294 1.45312 17.3387 1.45312 19.7812C1.45312 20.6716 2.03428 21.9405 4.80291 22.9293C6.73612 23.6197 9.29208 24 12 24C17.0637 24 22.5469 22.5716 22.5469 19.7812C22.5469 17.3383 18.4339 16.2301 16.0067 15.8571ZM6.9023 11.5287C6.89456 11.5166 6.8865 11.5048 6.87806 11.4931C6.07898 10.3938 5.67188 9.09098 5.67188 7.78125C5.67188 4.26478 8.50341 1.40625 12 1.40625C15.4893 1.40625 18.3281 4.26605 18.3281 7.78125C18.3281 9.09309 17.9287 10.3517 17.1728 11.4221C17.1051 11.5114 17.4585 10.9624 12 19.5276L6.9023 11.5287ZM12 22.5938C6.46903 22.5938 2.85938 20.968 2.85938 19.7812C2.85938 18.9836 4.71413 17.6721 8.82413 17.1609L11.407 21.2138C11.5361 21.4164 11.7597 21.5391 12 21.5391C12.2402 21.5391 12.4638 21.4164 12.5929 21.2138L15.1757 17.1609C19.2858 17.6721 21.1406 18.9836 21.1406 19.7812C21.1406 20.9579 17.5635 22.5938 12 22.5938Z"
                      fill="#365327"
                    />
                    <path
                      d="M12 4.26562C10.0615 4.26562 8.48438 5.84273 8.48438 7.78125C8.48438 9.71977 10.0615 11.2969 12 11.2969C13.9385 11.2969 15.5156 9.71977 15.5156 7.78125C15.5156 5.84273 13.9385 4.26562 12 4.26562ZM12 9.89062C10.8369 9.89062 9.89062 8.94436 9.89062 7.78125C9.89062 6.61814 10.8369 5.67188 12 5.67188C13.1631 5.67188 14.1094 6.61814 14.1094 7.78125C14.1094 8.94436 13.1631 9.89062 12 9.89062Z"
                      fill="#365327"
                    />
                  </svg>{" "}
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    More Than (4652) Locations
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#E7CAAA] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_6802_39924)">
                      <path
                        d="M23.2969 22.5938H20.2031V15.7031C20.2031 14.9277 19.5723 14.2969 18.7969 14.2969H17.7515C17.476 13.095 16.9276 12.0631 16.1456 11.2879C15.6534 10.8 15.0811 10.4272 14.4465 10.1763C15.8068 9.00267 16.6945 6.97373 16.6945 5.14059C16.6945 3.47709 16.2318 2.17148 15.3192 1.26019C14.4937 0.43575 13.3459 0 12 0C10.6541 0 9.50634 0.43575 8.68078 1.26019C7.76817 2.17148 7.30542 3.47709 7.30542 5.14059C7.30542 6.97369 8.19319 9.00267 9.55345 10.1763C8.91886 10.4272 8.34661 10.8 7.85442 11.2879C7.07241 12.0631 6.52402 13.0951 6.24858 14.2969H5.20312C4.42772 14.2969 3.79688 14.9277 3.79688 15.7031V22.5938H0.703125C0.314812 22.5938 0 22.9086 0 23.2969C0 23.6852 0.314812 24 0.703125 24H23.2969C23.6852 24 24 23.6852 24 23.2969C24 22.9086 23.6852 22.5938 23.2969 22.5938ZM12 1.40625C13.0327 1.40625 14.6534 1.74952 15.1432 3.79036C14.4266 3.69923 14.0174 3.49678 13.6971 3.3383C13.3831 3.18295 13.0273 3.00684 12.593 3.10641C12.2404 3.18722 11.9884 3.38611 11.7447 3.57848C11.3005 3.92906 10.6521 4.43972 8.73703 4.54313C8.97548 1.8308 10.8515 1.40625 12 1.40625ZM8.7825 5.94881C11.1706 5.82305 12.0626 5.11912 12.616 4.6823C12.6961 4.61902 12.7992 4.53769 12.8631 4.49873C12.9195 4.52255 13.0028 4.56375 13.0735 4.59872C13.4866 4.80314 14.1353 5.12395 15.2865 5.21808C15.2681 6.25341 14.8832 7.4017 14.2471 8.30644C13.598 9.22978 12.7789 9.75937 12 9.75937C11.2211 9.75937 10.402 9.22978 9.75281 8.30644C9.26367 7.61067 8.92242 6.77062 8.7825 5.94881ZM11.625 11.2031H12.375C14.3263 11.2031 15.7497 12.3441 16.302 14.2969H7.698C8.25028 12.3441 9.67369 11.2031 11.625 11.2031ZM5.20312 22.5938V15.7031H18.7969V22.5938H5.20312Z"
                        fill="#365327"
                      />
                      <path
                        d="M12 19.4529C12.3883 19.4529 12.7031 19.1381 12.7031 18.7498C12.7031 18.3614 12.3883 18.0466 12 18.0466C11.6117 18.0466 11.2969 18.3614 11.2969 18.7498C11.2969 19.1381 11.6117 19.4529 12 19.4529Z"
                        fill="#365327"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6802_39924">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>{" "}
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    We Offer All Amenities in All Locations
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#E7CAAA] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_6802_39917)">
                      <path
                        d="M23.2969 8.28436H20.9601C20.6003 3.65602 16.7191 0 12 0C7.28091 0 3.39975 3.65602 3.03989 8.28436H0.703125C0.314812 8.28436 0 8.59917 0 8.98748V16.5187C0 16.9071 0.314812 17.2219 0.703125 17.2219H3.71564C4.10395 17.2219 4.41877 16.9071 4.41877 16.5187V8.98748C4.41877 4.80717 7.81969 1.40625 12 1.40625C16.1803 1.40625 19.5812 4.80717 19.5812 8.98748V16.5187C19.5812 19.038 17.5317 21.0875 15.0125 21.0875H14.094C13.7996 20.2131 12.9724 19.5813 12 19.5813C10.7818 19.5813 9.79059 20.5724 9.79059 21.7906C9.79059 23.0089 10.7818 24 12 24C12.9724 24 13.7996 23.3682 14.094 22.4938H15.0125C18.0692 22.4938 20.5968 20.1863 20.9459 17.2219H23.2969C23.6852 17.2219 24 16.9071 24 16.5187V8.98748C24 8.59917 23.6852 8.28436 23.2969 8.28436ZM3.01252 15.8156H1.40625V9.69061H3.01252V15.8156ZM12 22.5938C11.5572 22.5938 11.1968 22.2335 11.1968 21.7906C11.1968 21.3478 11.5572 20.9875 12 20.9875C12.4428 20.9875 12.8032 21.3478 12.8032 21.7906C12.8032 22.2335 12.4428 22.5938 12 22.5938ZM22.5938 15.8156H20.9875V9.69061H22.5938V15.8156Z"
                        fill="#365327"
                      />
                      <path
                        d="M17.1637 8.33799C16.901 8.22915 16.5986 8.28924 16.3975 8.49034C16.3974 8.49034 14.2022 10.6849 13.1613 11.7249C12.6939 12.195 12.4258 12.8443 12.4258 13.5063C12.4258 13.8946 12.7406 14.2095 13.1289 14.2095H16.1914V15.7657C16.1914 16.154 16.5062 16.4688 16.8946 16.4688C17.2829 16.4688 17.5977 16.154 17.5977 15.7657V14.2095H17.6477C18.036 14.2095 18.3508 13.8946 18.3508 13.5063C18.3508 13.118 18.036 12.8032 17.6477 12.8032H17.5977V8.98759C17.5977 8.70324 17.4264 8.44688 17.1637 8.33799ZM16.1914 12.8032H14.0807C14.1047 12.7736 14.1301 12.7452 14.1569 12.7181C14.6836 12.1919 15.5072 11.3686 16.1914 10.6846V12.8032Z"
                        fill="#365327"
                      />
                      <path
                        d="M11.1953 15.7657C11.1953 15.3774 10.8804 15.0625 10.4921 15.0625H7.67836C7.70222 15.0329 7.72763 15.0045 7.75448 14.9775C8.79384 13.9389 10.9892 11.7442 10.9892 11.7442C11.1211 11.6123 11.1953 11.4334 11.1953 11.2469V10.8704C11.1953 9.44449 10.0353 8.28442 8.60939 8.28442C7.16934 8.28442 6.02344 9.45124 6.02344 10.8696V10.8703C6.02344 11.2586 6.33825 11.5731 6.72656 11.5731C7.11488 11.5731 7.42969 11.2579 7.42969 10.8696C7.42969 10.225 7.94864 9.69067 8.60939 9.69067C9.25988 9.69067 9.78905 10.2199 9.78905 10.8704V10.9556C9.21891 11.5255 7.60636 13.1375 6.75895 13.9843C6.29147 14.4543 6.02344 15.1037 6.02344 15.7657C6.02344 16.154 6.33825 16.4688 6.72656 16.4688H10.4922C10.8804 16.4688 11.1953 16.154 11.1953 15.7657Z"
                        fill="#365327"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6802_39917">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>{" "}
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    All Kinds of Support 24/7
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-6">
              <button className="bg-green-800 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition-colors">
                View Products
              </button>
              <button className="border border-green-800 text-green-800 px-8 py-3 rounded-xl hover:bg-green-50 transition-colors">
                Book Now
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <Image
              src="/group1.png"
              alt="Meeting Room"
              width={640}
              height={195}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/group2.png"
              alt="Office Space"
              width={640}
              height={195}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/rear.png"
              alt="Coworking Space"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
