"use client";

import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FocusStates {
  title: boolean;
  date: boolean;
  time: boolean;
  description: boolean;
}

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  date: Yup.date().required("Date is required"),
  time: Yup.string().required("Time is required"),
  description: Yup.string().optional(),
});

const SetMeeting: React.FC = () => {
  const [focusStates, setFocusStates] = useState<FocusStates>({
    title: false,
    date: false,
    time: false,
    description: false,
  });

  const handleFocus = (field: keyof FocusStates, isFocused: boolean): void => {
    setFocusStates((prevState) => ({
      ...prevState,
      [field]: isFocused,
    }));
  };

  return (
    <div className="flex items-center justify-center h-[70vh] md:h-[74vh] text-gray-200">
      <div className="w-full max-w-2xl p-4 md:p-8">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-300 md:mb-8">
          Set a Meeting
        </h1>

        <Formik
          initialValues={{
            title: "",
            date: "",
            time: "",
            description: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Meeting details:", values);
          }}
        >
          {({ handleBlur }) => (
            <Form className="md:space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {/* Title Field */}
                <div className="relative">
                  <label
                    htmlFor="title"
                    className={`absolute left-0 top-5 text-sm transition-all duration-200 ${
                      focusStates.title ? "text-gray-400" : "text-gray-200"
                    } ${
                      focusStates.title
                        ? "-translate-y-5 scale-90"
                        : "translate-y-2 scale-100"
                    }`}
                  >
                    Meeting Title
                  </label>
                  <Field
                    type="text"
                    name="title"
                    onFocus={() => handleFocus("title", true)}
                    onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                      handleFocus("title", e.target.value !== "");
                      handleBlur(e);
                    }}
                    className="w-full border-b-2 border-gray-200 bg-transparent focus:outline-none focus:ring-0 text-base font-light text-gray-200 p-2 pt-4 md:pt-6"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Date Field */}
                <div className="relative">
                  <label
                    htmlFor="date"
                    className={`absolute left-0 top-0 text-sm transition-all duration-200 ${
                      focusStates.date ? "text-gray-400" : "text-gray-200"
                    } ${
                      focusStates.date
                        ? "-translate-y-5 scale-90"
                        : "translate-y-2 scale-100"
                    }`}
                  >
                    Date
                  </label>
                  <Field
                    type="date"
                    name="date"
                    onFocus={() => handleFocus("date", true)}
                    onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                      handleFocus("date", e.target.value !== "");
                      handleBlur(e);
                    }}
                    className="w-full border-b-2 border-gray-200 bg-transparent focus:outline-none focus:ring-0 text-base font-light text-gray-200 p-2 pt-4 md:pt-6"
                  />
                  <ErrorMessage
                    name="date"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Time Field */}
                <div className="relative">
                  <label
                    htmlFor="time"
                    className={`absolute left-0 text-sm transition-all duration-200 ${
                      focusStates.time ? "text-gray-400" : "text-gray-200"
                    } ${
                      focusStates.time
                        ? "-translate-y-5 scale-90"
                        : "translate-y-2 scale-100"
                    }`}
                  >
                    Time
                  </label>
                  <Field
                    type="time"
                    name="time"
                    onFocus={() => handleFocus("time", true)}
                    onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                      handleFocus("time", e.target.value !== "");
                      handleBlur(e);
                    }}
                    className="w-full border-b-2 border-gray-200 bg-transparent focus:outline-none focus:ring-0 text-base font-light text-gray-200 p-2 pt-4 md:pt-6"
                  />
                  <ErrorMessage
                    name="time"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Description Field */}
                <div className="relative">
                  <label
                    htmlFor="description"
                    className={`absolute left-0 top-5 text-sm transition-all duration-200 ${
                      focusStates.description ? "text-gray-400" : "text-gray-200"
                    } ${
                      focusStates.description
                        ? "-translate-y-5 scale-90"
                        : "translate-y-2 scale-100"
                    }`}
                  >
                    Description (optional)
                  </label>
                  <Field
                    as="textarea"
                    name="description"
                    rows={4}
                    onFocus={() => handleFocus("description", true)}
                    onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) =>
                      handleFocus("description", e.target.value !== "")
                    }
                    className="w-full border-b-2 border-gray-200 bg-transparent focus:outline-none focus:ring-0 text-base font-light text-gray-200 p-2 pt-4 md:pt-6"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gray-200 text-black font-semibold text-sm hover:bg-gray-300"
              >
                SUBMIT
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SetMeeting;
