

const Message = () => {
    return (
        <div className="chat chat-end">
            <div className="chat -imagw avatar">
                <div className="w-10 rounded-full">
                    <img src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png' alt="Tailwind CSS chat bubble component" />

                </div>

            </div>
            <div className={`chat-bubble text-white bg-blue-500`}>Hi ! What is upp?</div>
            <div className="flex items-center gap-1 text-xs opacity-50 chat-footer">12:42</div>
        </div>
    )
}

export default Message