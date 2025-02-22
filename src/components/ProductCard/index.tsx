import Image from "next/image";
import React from "react";
import { ProductCardProps } from "./productCard.type";
import Link from "next/link";

export const ProductCard = ({
  name,
  id,
  image,
  price,
  category,
}: ProductCardProps) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <a href="#"></a>
      <div className="relative">
        <a href="#">
          <Image
            className="w-full"
            width={500}
            height={500}
            src={
              image ||
              "https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
            }
            alt="Sunset in the mountains"
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </a>
        <a href="#!">
          <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            {name || "Nombre del producto"}
          </div>
        </a>

        <a href="!#">
          <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            <span className="font-bold">Oferta</span>
          </div>
        </a>
      </div>
      <div className="px-6 py-4">
        <a
          href="#"
          className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
        >
          S/. {price || "Precio"}
        </a>
        <p className="text-gray-500 text-sm">{category || "categoría"}</p>
      </div>
      <button className="bg-indigo-600 hover:bg-white text-white hover:text-indigo-600 font-bold py-2 px-4 rounded-full transition duration-500 ease-in-out">
        <Link href={`/${id}`}>Ver detalle</Link>
      </button>
      <button className="bg-blue-400 hover:bg-white text-white hover:text-indigo-600 font-bold py-2 px-4 rounded-full transition duration-500 ease-in-out">
        Agregar al carrito
      </button>
      <div className="px-6 py-4 flex flex-row items-center">
        <span
          //href="#"
          className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
        >
          <svg
            height="13px"
            width="13px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            //style="enable-background:new 0 0 512 512;"
          >
            <g>
              <g>
                <path
                  d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
			c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                ></path>
              </g>
            </g>
          </svg>
          <span className="ml-1">6 mins ago</span>
        </span>
      </div>
    </div>
  );
};
