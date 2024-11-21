"use client";
import { deleteSession } from "@/utils/session";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
import ConfirmModal from "../todo/modal-confirm";

const LogoutButton: React.FC<{ className?: string }> = ({ className }) => {
  const [showConfirmModal, setShowConfirmModal] =
    React.useState<boolean>(false);

  const logOut = () => {
    deleteSession();
    toast.success("Logged out", {
      style: { backgroundColor: "#6e6e6e", color: "#fff", fontSize: "15px" },
    });
    redirect("/");
  };
  return (
    <>
      <button onClick={() => setShowConfirmModal(true)} className={className}>
        Log out
      </button>
      {showConfirmModal && (
        <ConfirmModal
          setShowConfirmModal={setShowConfirmModal}
          text="log out"
          logOut={true}
          logoutHandler={logOut}
        />
      )}
    </>
  );
};

export default LogoutButton;
