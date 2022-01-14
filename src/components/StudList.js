import React from 'react'
import Student from './Student';

function StudList(props) {
                    return (
                      <div>
                        <div className="mt-3 mx-auto w-75 bg-light text-center">
                          <div className="pt-3 d-flex justify-content-start align-items-center flex-wrap">
                            <h6 className="text-warning bg-light w-25">
                              STUD NUMBER :
                            </h6>
                            <h6 id="numE" />
                            <h6 className="text-warning bg-light w-25">
                              General average :
                            </h6>
                            <h6 id="gen" />
                          </div>
                          {/* stud adm stud non adm */}
                          <h6 className="mt-3 text-warning bg-light w-25">
                            List of Students
                          </h6>
                          <table className="table text-danger w3-container w3-center w3-animate-left">
                            <thead>
                              <tr id="m">
                                <th>Picture</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Note</th>
                                <th>#</th>
                              </tr>
                            </thead>
                            <tbody id="tab" className="text-dark mx-auto">
                              {props.student
                                .sort((a, b) => b.id - a.id)
                                .map((t) => (
                                  <Student
                                    key={t.id}
                                    stud={t}
                                    deleteStud={props.deleteStud}
                                  />
                                ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    );
}

export default StudList;
