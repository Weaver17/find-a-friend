"use client";
import { CustomButton } from "@/components/custom/c_button";
import { LoadingOverlay } from "@/components/custom/c_loading-spinner";
import { H1Custom, PCustom } from "@/components/typeography/custom";
import { getOrgById } from "@/lib/pet-api";
import { Org } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function Page() {
    const [org, setOrg] = useState<Org | null>(null);

    const params = useParams<{ id: string }>();

    useEffect(() => {
        async function getOrg() {
            await getOrgById(params.id).then((data) => {
                setOrg(data);
            });
        }

        getOrg();
    }, []);

    return (
        <div className="client-page">
            {org === null ? (
                <LoadingOverlay />
            ) : (
                <div className="mt-6 flex flex-col gap-4">
                    <H1Custom className="text-center border-b pb-2">
                        {org.name}
                    </H1Custom>
                    <div className="flex flex-col gap-6 items-center">
                        <Image
                            src={org?.photos[0]?.full}
                            alt={org?.name}
                            width={300}
                            height={300}
                            className="rounded-sm shadow-sm"
                        />
                        <div className="flex justify-evenly w-full gap-4">
                            <div className="flex flex-col gap-0 text-xs sm:text-sm md:text-base">
                                <div className="flex gap-4">
                                    <PCustom className="font-semibold">
                                        Address:
                                    </PCustom>
                                    {org?.address === null ? (
                                        <></>
                                    ) : (
                                        <div className="flex gap-1">
                                            <PCustom>
                                                {org?.address.address1}
                                            </PCustom>
                                            <PCustom>
                                                {org?.address.address2}
                                            </PCustom>
                                            <PCustom>
                                                {org?.address.city},
                                            </PCustom>
                                            <PCustom>
                                                {org?.address.state}.
                                            </PCustom>
                                            <PCustom>
                                                {org?.address.postcode}.
                                            </PCustom>
                                            <PCustom>
                                                {org?.address.country}.
                                            </PCustom>
                                        </div>
                                    )}
                                </div>
                                {org?.email === null ? (
                                    <></>
                                ) : (
                                    <div className="flex gap-4">
                                        <PCustom className="font-semibold">
                                            Email:
                                        </PCustom>
                                        <PCustom>{org?.email}</PCustom>
                                    </div>
                                )}

                                {org?.phone === null ? (
                                    <></>
                                ) : (
                                    <div className="flex gap-4">
                                        <PCustom className="font-semibold">
                                            Phone:
                                        </PCustom>
                                        <PCustom>{org?.phone}</PCustom>
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-4">
                                {org?.website === null ? (
                                    <></>
                                ) : (
                                    <CustomButton asChild>
                                        <Link
                                            href={org?.website}
                                            target="_blank"
                                        >
                                            Website
                                        </Link>
                                    </CustomButton>
                                )}
                                {org?.url === null ? (
                                    <></>
                                ) : (
                                    <CustomButton asChild>
                                        <Link href={org?.url} target="_blank">
                                            Petfinder Page
                                        </Link>
                                    </CustomButton>
                                )}
                                {org?._links?.animals?.href === null ? (
                                    <></>
                                ) : (
                                    <CustomButton asChild>
                                        <Link
                                            href={`/orgs/org/${org?.id}/pets`}
                                        >
                                            See Our Friends
                                        </Link>
                                    </CustomButton>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Page;
