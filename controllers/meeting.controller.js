const meetingServices = require("../services/meeting.service");

exports.startMeeting = (req, res, next) => {
    const {hostId, hostName} = req.body;
    console.log('startMeeting');
    var model = {
        hostId: hostId,
        hostName: hostName,
        startTime: Date.now()
    };

    meetingServices.startMeeting(model, (error, result) => {
        if(error) {
            return next(error);
        }
        return res.status(200).send({
            message: "Success",
            data: result.id,
        });
    })
}

exports.checkMeetingExists = (req, res, next) => {
    const {meetingId} = req.query;
    console.log('checkMeetingExists');
    meetingServices.checkMeetingExists(meetingId, (error, results) => {
        if(error) {
            return next(error);
        }
        return res.status(200).send({
            message: "Success",
            data: results
        });
    })
}

exports.getAllMeetingUsers = (req, res, next) => {
    const {meetingId} = req.query;
    console.log('getAllMeetingUsers');
    meetingServices.getAllMeetingUsers(meetingId, (error, results) => {
        if(error) {
            return next(error);
        }
        return res.status(200).send({
            message: "Success",
            data: results
        });
    });
}