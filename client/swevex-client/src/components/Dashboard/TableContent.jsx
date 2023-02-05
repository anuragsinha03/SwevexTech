import React, { useState } from "react";

function TableContent(props) {
  const { name, email, phone, subject, message } = props.value;
  const [fullText, setFullText] = useState(false);
  const msgLimit = 100;
  return (
    <div>
      <table class="table-fixed border-fixed border border-slate-500 w-full">
        <tbody>
          <tr className="bg-[#ececec] text-[10px] md:text-[16px]">
            <td class="border border-slate-700 break-words">{name}</td>
            <td class="border border-slate-700 break-words">{email}</td>
            <td class="border border-slate-700 break-words">{phone}</td>
            <td class="border border-slate-700 break-words">{subject}</td>
            <td class="border border-slate-700 break-words">
              <div>
                {!fullText && message.length > msgLimit ? (
                  <div>
                    {message.substring(0, msgLimit)}...
                    <button
                      className="text-[#0000ff]"
                      onClick={() => setFullText(true)}
                    >
                      Read More
                    </button>
                  </div>
                ) : (
                  <div>
                    {message}
                    {message.length > msgLimit ? (
                      <button
                        className="text-[#0000ff]"
                        onClick={() => setFullText(false)}
                      >
                        Read less
                      </button>
                    ) : null}
                  </div>
                )}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableContent;
