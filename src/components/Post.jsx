const Post = () => {
    return (
        <div className="border rounded p-4">
            <div className="flex justify-between mb-4">
                <div className="flex gap-2">
                    <img className="rounded-full h-[3rem] w-[3rem]" src="https://avatars.githubusercontent.com/u/86522089?v=4" alt="" />
                    <div>
                        <h1 className="font-bold">Amos Mwongela</h1>
                        <p>Software Engineer</p>
                    </div>
                </div>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </p>
            </div>
            <div>
                <h1 className="font-bold">Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit totam error alias asperiores cumque dolor illo ullam neque officia. At!</p>
            </div>
        </div>
    )
}

export default Post