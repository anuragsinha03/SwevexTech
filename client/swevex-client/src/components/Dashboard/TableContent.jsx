import React from "react";

function TableContent(props) {
  const { name, email, phone, subject, message } = props.value;
  return (
    <div>
      <table class="table-fixed border-fixed border border-slate-500 w-full">
        <tbody>
          <tr className="bg-[#ececec] text-[10px] md:text-[16px]">
            <td class="border border-slate-700 break-words">{name}</td>
            <td class="border border-slate-700 break-words">{email}</td>
            <td class="border border-slate-700 break-words">{phone}</td>
            <td class="border border-slate-700 break-words">{subject}</td>
            <td class="border border-slate-700 break-words">{message}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableContent;
