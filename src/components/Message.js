function Message({name,job,age}) {
    return (
        <p className="bg-primary text-white display-6">
             This is a message from {name} who is a <b>{job}</b> and he's <b>{age}</b> of age.
        </p>
    );
}

export default Message;