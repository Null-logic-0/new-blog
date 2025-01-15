"use client";

import { useRouter } from "next/navigation";

function ModalImage() {
  const router = useRouter();
  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
    </>
  );
}

export default ModalImage;
