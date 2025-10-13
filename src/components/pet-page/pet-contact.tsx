import React from "react";
import { H4Custom, PCustom } from "../typeography/custom";
import { Friend } from "@/types/types";
import { CustomButton } from "../custom/c_button";
import Link from "next/link";

type PetCOntactProps = {
    friend: Friend;
};

function PetContact({ friend }: PetCOntactProps) {
    return (
        <>
            <H4Custom className="text-center">My Contact Information</H4Custom>
            <div className="flex flex-col items-center  text-xs sm:text-sm md:text-base">
                <div className="flex gap-4">
                    <PCustom className="font-semibold">Address:</PCustom>
                    {friend?.contact?.address === null ? (
                        <></>
                    ) : (
                        <div className="flex gap-1">
                            <PCustom>
                                {friend?.contact?.address.address1}
                            </PCustom>
                            <PCustom>
                                {friend?.contact?.address.address2}
                            </PCustom>
                            <PCustom>{friend?.contact?.address.city},</PCustom>
                            <PCustom>{friend?.contact?.address.state}.</PCustom>
                            <PCustom>
                                {friend?.contact?.address.postcode}.
                            </PCustom>
                            <PCustom>
                                {friend?.contact?.address.country}.
                            </PCustom>
                        </div>
                    )}
                </div>
                {friend?.contact?.email === null ? (
                    <></>
                ) : (
                    <div className="flex gap-4">
                        <PCustom className="font-semibold">Email:</PCustom>
                        <PCustom>{friend?.contact?.email}</PCustom>
                    </div>
                )}

                {friend?.contact?.phone === null ? (
                    <></>
                ) : (
                    <div className="flex gap-4">
                        <PCustom className="font-semibold">Phone:</PCustom>
                        <PCustom>{friend?.contact?.phone}</PCustom>
                    </div>
                )}
                <div className="flex flex-col gap-4 mt-6">
                    <CustomButton
                        asChild
                        className="w-full max-w-[300px] mx-auto"
                    >
                        <Link href={`/orgs/${friend?.organization_id}`}>
                            My Shelter
                        </Link>
                    </CustomButton>
                    <CustomButton
                        asChild
                        className="w-full max-w-[300px] mx-auto"
                    >
                        <Link href={`/orgs/${friend?.url}`}>
                            Petfinder Page
                        </Link>
                    </CustomButton>
                </div>
            </div>
        </>
    );
}

export default PetContact;
