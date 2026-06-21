import asyncio


async def say_hello():
    print("Hello...")
    await asyncio.sleep(1)  # Simulate a non-blocking pause
    print("...World!")


async def say_goodbye():
    print("Goodbye...")
    await asyncio.sleep(2)  # Simulate a non-blocking pause
    print("...Everyone!")


async def main():
    # Schedule both coroutines to run concurrently
    await asyncio.gather(say_hello(), say_goodbye())


# Run the asyncio event loop
asyncio.run(main())
