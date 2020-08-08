import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { TutorProvider } from "./tutor-provider.ts";

Deno.test("test getTutor", async (): Promise<void> => {

    const tutorProvider = new TutorProvider()
    const actualResponse: string = await tutorProvider.getTutor('4711')

    const expectedResponse = "Lucky Luke"

    assertEquals(expectedResponse, actualResponse)

});

