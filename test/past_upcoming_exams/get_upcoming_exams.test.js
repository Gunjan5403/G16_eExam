import sinon from 'sinon';
import assert from 'assert';
import { get_upcoming_exams } from '../../backend/controller/past_upcoming_exams.js'; // Adjust path if needed
import Exam from '../../backend/models/exam.js';

describe("get_upcoming_exams API Function", function () {
    let req, res;

    // Setup request and response objects before each test
    beforeEach(() => {
        req = {};  // No params needed for this API call
        res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };
    });

    // Restore stubs after each test
    afterEach(() => {
        sinon.restore();
    });


    it("should return 500 if there is a server error", async () => {
        // Simulate an error in Exam.find
        sinon.stub(Exam, "find").throws(new Error("Database error"));

        await get_upcoming_exams(req, res);

        // Assertions to verify error handling
        assert(res.status.calledOnceWith(500));  // Check for status code 500
        assert(res.json.calledOnceWithMatch({
            message: "Database error",
        }));
    });

});