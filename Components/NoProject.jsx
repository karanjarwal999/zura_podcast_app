import { useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import AddProjectModal from "./Modals/AddProjectModal";

function NoProject() {

  // to open add project modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="w-[1300px] m-auto flex flex-col gap-[20px]">
      <h2 className="text-center text-[60px] font-bold text-[#7E22CE] ">
        Create a New Project
      </h2>
      <Image
        className="m-auto"
        src="/boyOnDesk.svg"
        alt="Example SVG"
        width={405}
        height={271}
      />
      <p className="text-[30px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in
      </p>
      <button
        onClick={onOpen}
        className="m-auto text-[40px] bg-black text-white flex items-center gap-2 rounded-[10px] py-[15px] px-[30px]"
      >
        <FiPlusCircle size={"55px"} />
        Create New Project
      </button>

      {/* add project modal */}
      <AddProjectModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default NoProject;
