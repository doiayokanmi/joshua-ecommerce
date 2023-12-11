import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";

interface Props {
  isOpen: boolean;
  content: string;
  header: string;
  func: () => void;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Modal({
  isOpen,
  content,
  header,
  func,
  setIsOpen,
}: Props) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="fixed inset-0 flex w-screen h-screen items-center justify-center p-4">
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {header}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{content}</p>
                    </div>

                    <div className="mt-4 flex justify-between">
                      <button
                        className="p-2 flex items-center text-white bg-primary rounded"
                        onClick={closeModal}
                      >
                        <FaXmark className="mr-2" /> No, I want to continue
                      </button>
                      <button
                        className="p-2 flex items-center text-white bg-red-500 rounded"
                        onClick={func}
                      >
                        <IoMdCheckmark className="mr-2" /> Yes, Clear it
                      </button>
                    </div>
                  </Dialog.Panel>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
