import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { SuccessQuestionIcon } from '../../../common/components/icons';

export const AcceptDialog = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button onClick={ () => setOpen(true) } className="bg-green-foundation-500 rounded-md py-3 px-14">Accept</button>
            <Transition appear show={ open } as={ Fragment }>
                <Dialog as="div" className="relative z-10" onClose={ () => setOpen(false) }>
                    <Transition.Child as={ Fragment } enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0" >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center">
                            <Transition.Child as={ Fragment } enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95" >
                                <Dialog.Panel className="flex justify-center items-center flex-col w-11/12 transform overflow-hidden rounded-2xl bg-white align-middle shadow-xl transition-all text-center max-w-[696px] py-12">
                                    <SuccessQuestionIcon />
                                    <div className="mt-10 mb-14">
                                        <div className="text-gray-foundation-500 text-2xl font-semibold">Is the data you entered correct?</div>
                                    </div>
                                    <div className="flex justify-center gap-4">
                                        <button type={ `button` } role={ `button` } onClick={ () => logout() } className="bg-green-500 text-white p-3 md:min-w-[185px] w-full whitespace-nowrap rounded-md">Yes, Confirm</button>
                                        <button onClick={ () => setOpen(false) } className="bg-gray-100 p-3 md:min-w-[185px] w-full whitespace-nowrap rounded-md text-white">Cancel</button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};
